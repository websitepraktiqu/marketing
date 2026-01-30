<?php
/**
 * Backend Snippets for Headless WooCommerce Checkout & WhatsApp Notifications (SECURED)
 * 
 * Instructions:
 * 1. Copy the code below into your WordPress theme's functions.php file or a custom plugin (e.g., Code Snippets).
 * 2. Ensure WooCommerce and Xendit Payment Gateway plugins are active.
 * 3. Define the secrets in your wp-config.php or use defaults (not recommended for production):
 *    define('WP_FONNTE_TOKEN', 'your-fonnte-token');
 *    define('PRAKTIQU_API_SECRET', 'your-random-secure-string-here');
 */

// =========================================================================
// TASK 1: CUSTOM CHECKOUT ENDPOINT (SECURED)
// =========================================================================
add_action('rest_api_init', function () {
    register_rest_route('praktiqu/v1', '/checkout', array(
        'methods' => 'POST',
        'callback' => 'handle_custom_checkout_endpoint',
        'permission_callback' => '__return_true', // Validation done inside for custom header
    ));
});

function handle_custom_checkout_endpoint($request) {
    // SECURITY CHECK: Verify Secret Key
    $secret = defined('PRAKTIQU_API_SECRET') ? PRAKTIQU_API_SECRET : 'b64f9765-af25-4707-ab30-f794dcfac8c4';
    $header_secret = $request->get_header('x_praktiqu_secret'); 
    
    if (empty($secret) || $header_secret !== $secret) {
        return new WP_Error('forbidden', 'Invalid or missing API Secret.', array('status' => 403));
    }

    // 1. Receive Data
    $params = $request->get_json_params();
    $product_id = isset($params['product_id']) ? sanitize_text_field($params['product_id']) : '';
    $name = isset($params['name']) ? sanitize_text_field($params['name']) : '';
    $email = isset($params['email']) ? sanitize_email($params['email']) : '';
    $phone = isset($params['phone']) ? sanitize_text_field($params['phone']) : '';
    $password = isset($params['password']) ? $params['password'] : ''; // Capture Password

    if (empty($product_id) || empty($email) || empty($phone)) {
        return new WP_Error('missing_params', 'Missing required parameters', array('status' => 400));
    }

    // --- NEW: USER REGISTRATION LOGIC ---
    // Check if user exists
    $user_id = email_exists($email);
    if (!$user_id && !empty($password)) {
        // Create new user
        $username = $email; // Use email as username
        $user_id = wp_create_user($username, $password, $email);
        
        if (!is_wp_error($user_id)) {
            // Update First Name
            wp_update_user([
                'ID' => $user_id,
                'first_name' => $name,
                'rol' => 'customer' // Ensure role is customer
            ]);
        }
    }
    // ------------------------------------

    // 2. Create Order
    $address = array(
        'first_name' => $name,
        'email'      => $email,
        'phone'      => $phone,
    );

    $order_data = array(
        'status' => 'pending',
        'customer_id' => $user_id ? $user_id : 0, // Link order to user if exists
    );

    $order = wc_create_order($order_data);
    
    // START: Product Mapping Logic
    // PLEASE UPDATE THE IDS BELOW WITH YOUR ACTUAL WOOCOMMERCE PRODUCT IDS
    $product_map = array(
        // --- EXISTING MENTORING PRODUCTS ---
        'personal'        => 6127,
        'group'           => 6129,
        'bundle-personal' => 6142,
        'bundle-group'    => 6140,

        // --- SERI BANTU ANAKKU PRODUCTS (NEW) ---
        // Masukkan ID Produk dari Link: https://event.praktiqu.com/course-bundle/bundling-seri-bantu-anak-ku-strategi-orang-tua-dalam-menangani-masalah/
        'bundling-bantu-anakku' => 5389, // GANTI DENGAN ID BUNDLING (Angka)

        'topik-1'         => 5225, 
        'topik-2'         => 5265, 
        'topik-3'         => 5268, 
        'topik-4'         => 5272, 
        'topik-5'         => 5276, 
        'topik-6'         => 5280, 
        'topik-7'         => 5283,
    );

    if (isset($product_map[$product_id])) {
        $real_product_id = $product_map[$product_id];
    } else {
        $real_product_id = $product_id; 
    }
    
    // Fallback if ID is 0 or invalid (prevent crash)
    if (empty($real_product_id)) {
         return new WP_Error('invalid_product_map', 'Product ID mapping missing for: ' . $product_id, array('status' => 400));
    }

    $product = wc_get_product($real_product_id);
    
    if (!$product) {
        return new WP_Error('invalid_product', 'Product invalid (ID: ' . $real_product_id . ')', array('status' => 400));
    }
    
    // Logic: If 'group' or 'bundle-group', quantity is 3. Else 1.
    $quantity = ($product_id === 'group' || $product_id === 'bundle-group') ? 3 : 1;
    
    $order->add_product($product, $quantity);
    $order->set_address($address, 'billing');

    // Save Extra Participants Data
    if (isset($params['name_2'])) $order->update_meta_data('_participant_2_name', sanitize_text_field($params['name_2']));
    if (isset($params['phone_2'])) $order->update_meta_data('_participant_2_phone', sanitize_text_field($params['phone_2']));
    if (isset($params['name_3'])) $order->update_meta_data('_participant_3_name', sanitize_text_field($params['name_3']));
    if (isset($params['phone_3'])) $order->update_meta_data('_participant_3_phone', sanitize_text_field($params['phone_3']));
    
    // Save Profession (Profesi) - NEW FIELD
    if (isset($params['profesi'])) $order->update_meta_data('_participant_1_profesi', sanitize_text_field($params['profesi']));
    if (isset($params['profesi_2'])) $order->update_meta_data('_participant_2_profesi', sanitize_text_field($params['profesi_2']));
    if (isset($params['profesi_3'])) $order->update_meta_data('_participant_3_profesi', sanitize_text_field($params['profesi_3']));
    
    // Save Source Slug for Notification Logic
    $order->update_meta_data('_source_slug', $product_id);

    $order->calculate_totals();

    // 3. Set Payment Method (Xendit)
    $payment_gateways = WC()->payment_gateways->payment_gateways();
    $payment_url = '';
    
    if (isset($payment_gateways['xendit_gateway'])) {
        $gateway = $payment_gateways['xendit_gateway'];
        $order->set_payment_method($gateway);
        $order->save(); 
        try {
            $result = $gateway->process_payment($order->get_id());
            if (isset($result['result']) && $result['result'] === 'success') {
                $payment_url = $result['redirect'];
            }
        } catch (Exception $e) {
            return new WP_Error('payment_error', $e->getMessage(), array('status' => 500));
        }
    }
    
    // Fallback
    if (empty($payment_url)) {
        $payment_url = $order->get_checkout_payment_url();
    }

    // =========================================================================
    // NEW: SEND PENDING PAYMENT NOTIFICATION (WHATSAPP)
    // =========================================================================
    $token = defined('WP_FONNTE_TOKEN') ? WP_FONNTE_TOKEN : 'YAfc2zx2sW84uCJwehTo';
    if (!empty($token) && !empty($payment_url)) {
        $phone_billing = $order->get_billing_phone();
        $name_billing = $order->get_billing_first_name();
        
        if ($phone_billing) {
            if (substr($phone_billing, 0, 1) == '0') {
                $phone_billing = '62' . substr($phone_billing, 1);
            }
            
            $product_name = $product->get_name();
            $message = "Halo {$name_billing}, terima kasih telah mendaftar *{$product_name}*.\n\nSilakan selesaikan pembayaran Anda melalui link berikut:\n{$payment_url}\n\n⏰ Link pembayaran ini hanya berlaku selama 1 jam.\nMohon segera selesaikan pembayaran agar pesanan Anda tidak dibatalkan.\n\n\nTerima kasih!";
            
            wp_remote_post('https://api.fonnte.com/send', array(
                'body' => array(
                    'target' => $phone_billing,
                    'message' => $message,
                ),
                'headers' => array(
                    'Authorization' => $token,
                ),
            ));
        }
    }

    // 5. Response
    return array(
        'status' => 'success',
        'payment_url' => $payment_url,
        'order_id' => $order->get_id(),
        'user_created' => (!empty($password) && !$user_id) // Flag if new user was created
    );
}

// =========================================================================
// TASK 2: WHATSAPP NOTIFICATION (SUCCESS)
// =========================================================================
add_action('woocommerce_order_status_processing', 'send_whatsapp_notification_on_processing', 10, 1);
function send_whatsapp_notification_on_processing($order_id) {
    $order = wc_get_order($order_id);
    if (!$order) return;
    if ($order->get_meta('_wa_sent') === 'yes') return;
    
    $token = defined('WP_FONNTE_TOKEN') ? WP_FONNTE_TOKEN : 'YAfc2zx2sW84uCJwehTo';
    if (empty($token)) return;
    
    $group_link = "https://chat.whatsapp.com/D90RqxUn5fF6eHHNulIBNk"; 
    
    $targets = array();
    
    // P1 (Billing)
    $phone1 = $order->get_billing_phone();
    $name1 = $order->get_billing_first_name();
    $profesi1 = $order->get_meta('_participant_1_profesi');
    if ($phone1) $targets[] = array('phone' => $phone1, 'name' => $name1, 'profesi' => $profesi1);
    
    // P2
    $phone2 = $order->get_meta('_participant_2_phone');
    $name2 = $order->get_meta('_participant_2_name');
    $profesi2 = $order->get_meta('_participant_2_profesi');
    if ($phone2) $targets[] = array('phone' => $phone2, 'name' => $name2, 'profesi' => $profesi2);
    
    // P3
    $phone3 = $order->get_meta('_participant_3_phone');
    $name3 = $order->get_meta('_participant_3_name');
    $profesi3 = $order->get_meta('_participant_3_profesi');
    if ($phone3) $targets[] = array('phone' => $phone3, 'name' => $name3, 'profesi' => $profesi3);
    
    // Loop and Send
    foreach ($targets as $t) {
        $phone = $t['phone'];
        $name = $t['name'];
        // You can include profession in the message if you want
        
        if (substr($phone, 0, 1) == '0') {
            $phone = '62' . substr($phone, 1);
        }

        // CUSTOM MESSAGE LOGIC
        $source_slug = $order->get_meta('_source_slug');
        $is_seri_bantu = ($source_slug === 'bundling-bantu-anakku' || strpos($source_slug, 'topik-') === 0);

        if ($is_seri_bantu) {
            // PESAN KHUSUS SERI BANTU (DASHBOARD)
            $message = "Halo {$name}, pembayaran order #{$order_id} BERHASIL!
        
🎓 *Akses Belajar:*
Silakan login di sini: https://event.praktiqu.com/dashboard/
Gunakan Email & Password yang Anda buat saat pendaftaran.

Terima kasih!";
        } else {
            // PESAN DEFAULT (MENTORING / MARKETING LAIN)
             $message = "Halo {$name}, pembayaran order #{$order_id} berhasil! Silakan join grup via link: {$group_link}";
        }

        $response = wp_remote_post('https://api.fonnte.com/send', array(
            'body' => array(
                'target' => $phone,
                'message' => $message,
            ),
            'headers' => array(
                'Authorization' => $token,
            ),
        ));
    }
    
    $order->update_meta_data('_wa_sent', 'yes');
    $order->save();
}

// =========================================================================
// TASK 3: GET TRANSACTIONS ENDPOINT (ADMIN DASHBOARD)
// =========================================================================
add_action('rest_api_init', function () {
    register_rest_route('praktiqu/v1', '/transactions', array(
        'methods' => 'GET',
        'callback' => 'handle_get_transactions_endpoint',
        'permission_callback' => function () {
            // KEAMANAN: Hanya boleh diakses oleh Admin yang sudah login
            return current_user_can('manage_options');
        },
    ));
});

function handle_get_transactions_endpoint($request) {
    // 1. Ambil 50 Order Terakhir dari WooCommerce
    $args = array(
        'limit' => 50,
        'orderby' => 'date',
        'order' => 'DESC',
        'return' => 'ids',
    );
    
    $query = new WC_Order_Query($args);
    $orders = $query->get_orders();
    
    $data = array();
    
    // Mapping ID Produk Asli (WooCommerce) kembali ke ID Slug (Frontend)
    // Sesuai dengan snippet checkout Anda
    $reverse_map = array(
        6127 => 'personal',
        6129 => 'group',
        6142 => 'bundle-personal',
        6140 => 'bundle-group'
        // Add reverse mapping for topics if needed for dashboard visualization
    );
    
    foreach ($orders as $order_id) {
        $order = wc_get_order($order_id);
        if (!$order) continue;
        
        // Ambil Item Produk Pertama
        $items = $order->get_items();
        $product_name = '-';
        $product_id_real = 0;
        
        foreach ($items as $item) {
            $product_name = $item->get_name();
            $product_id_real = $item->get_product_id();
            break; // Hanya ambil satu produk utama
        }

        // Tentukan Product ID Slug untuk Frontend
        $product_id_slug = isset($reverse_map[$product_id_real]) ? $reverse_map[$product_id_real] : (string)$product_id_real;
        
        $data[] = array(
            'id' => $order->get_id(),
            'date' => $order->get_date_created()->date('Y-m-d H:i:s'),
            'invoice_id' => 'INV-' . $order->get_id(),
            'name' => $order->get_billing_first_name() . ' ' . $order->get_billing_last_name(),
            'phone' => $order->get_billing_phone(),
            'email' => $order->get_billing_email(),
            'product_id' => $product_id_slug, 
            'product_name' => $product_name,
            'status' => $order->get_status(), // pending, processing, completed, cancelled
            'amount' => $order->get_total()
        );
    }
    
    return $data;
}
