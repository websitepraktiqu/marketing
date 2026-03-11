Collecting workspace information# Alur Fitur Checkout di PraktiQu

Berikut adalah alur lengkap fitur checkout di aplikasi ini, dari keranjang hingga pembayaran:

---

## 1. Keranjang Belanja (Cart)

Keranjang dikelola secara global lewat `CartProvider` di CartContext.tsx. Data keranjang disimpan di `localStorage` dengan key `praktiqu_cart`.

Fungsi utama:
- **`addToCart`** — Menambah kursus ke keranjang (mencegah duplikat).
- **`removeFromCart`** — Menghapus item berdasarkan `courseId`.
- **`clearCart`** — Mengosongkan keranjang.
- **`cartTotal`** — Menghitung total harga dengan parsing string `"Rp 100.000"` menjadi angka.
- **`cartCount`** — Jumlah item di keranjang.

Pengguna bisa menambah kursus ke keranjang dari halaman detail kursus ([pages/courses/[id].tsx](pages/courses/[id].tsx)):

```tsx
const handleAddToCart = () => {
    if (!checkProfessionalAccess()) return;
    addToCart(course);
    router.push('/cart');
};
```

> **Catatan:** Ada pengecekan akses Professional — jika kursus bertipe `Professional`, user harus login dan bukan role `umum`.

---

## 2. Halaman Cart

Di cart.tsx, user melihat daftar item, bisa menghapus item, dan menekan tombol **"Lanjutkan ke Checkout"** yang mengarahkan ke `/checkout`.

---

## 3. Halaman Checkout (Frontend)

File: checkout.tsx

### a. Pengisian Billing
User mengisi **Nama Lengkap**, **Email**, dan **Nomor WhatsApp**. Jika sudah login, nama dan email terisi otomatis dari data [`useAuth()`](context/AuthContext.tsx) dan field menjadi `readOnly`.

### b. Kupon / Promo Code
User bisa memasukkan kode kupon. Validasi dilakukan via API:

```tsx
const res = await fetch(`/api/check-coupon?code=${couponCode}`);
```

API route check-coupon.ts mem-proxy request ke WooCommerce REST API (`/wc/v3/coupons?code=...`) menggunakan **Consumer Key/Secret** dari environment variable. Jika valid, diskon dihitung:

- **`percent`** → potongan persentase dari `cartTotal`
- **`fixed_cart`** → potongan nominal tetap

### c. Validasi Professional Access
Sebelum submit, ada pengecekan ulang: jika ada kursus `Professional` di keranjang, user harus login dan bukan role `umum`.

### d. Submit Pembayaran
Saat user klik **Bayar**, frontend mengirim POST ke `/api/checkout`:

```tsx
const payload = {
    items: lineItems,       // [{ product_id, quantity }]
    couponCode: appliedCoupon?.code,
    billing                 // { name, email, phone }
};

const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
});
```

---

## 4. API Checkout (Backend)

File: checkout.ts

### Alur:

```
┌─────────────────────────────────────────────┐
│  1. Validasi method POST & environment vars │
│     (WC_CONSUMER_KEY, WC_CONSUMER_SECRET)   │
├─────────────────────────────────────────────┤
│  2. Cari/Buat Customer di WooCommerce       │
│     POST → /wc/v3/customers                 │
├─────────────────────────────────────────────┤
│  3. Buat Order via Custom WP Endpoint       │
│     POST → /wp-json/praktiqu/v1/            │
│             checkout-xendit                  │
├─────────────────────────────────────────────┤
│  4. Return { orderId, paymentUrl }          │
└─────────────────────────────────────────────┘
```

**Detail langkah:**

1. **Validasi** — Pastikan `WC_CONSUMER_KEY` dan `WC_CONSUMER_SECRET` ada.

2. **Customer Lookup/Create** — Mencari customer WooCommerce berdasarkan email via `/wc/v3/customers?email=...`. Jika belum ada, buat customer baru via `POST /wc/v3/customers`.

3. **Buat Order** — Mengirim data ke custom WordPress endpoint `praktiqu/v1/checkout-xendit`:

   ```ts
   const orderData = {
       customer_id: customerId,
       billing: { first_name, email, phone },
       items: [{ product_id, quantity }, ...],
   };
   ```

   Endpoint WordPress ini kemungkinan membuat WooCommerce Order dan mengenerate **Xendit payment link**.

4. **Response** — Jika berhasil, API mengembalikan `orderId` dan `paymentUrl`. Frontend langsung redirect user ke halaman pembayaran Xendit:

   ```tsx
   if (data.paymentUrl) {
       window.location.href = data.paymentUrl;
   }
   ```

---

## 5. Diagram Alur Keseluruhan

```
User                Frontend                    Next.js API              WordPress/WooCommerce
 │                     │                            │                          │
 ├─ Add to Cart ──────►│ CartContext (localStorage)  │                          │
 │                     │                            │                          │
 ├─ Go to /cart ──────►│ Tampilkan items            │                          │
 │                     │                            │                          │
 ├─ Go to /checkout ──►│ Form billing + kupon       │                          │
 │                     │                            │                          │
 ├─ Apply Coupon ─────►│───── GET /api/check-coupon─►│──── GET /wc/v3/coupons──►│
 │                     │◄────── coupon data ────────│◄──── coupon response ────│
 │                     │                            │                          │
 ├─ Klik "Bayar" ─────►│── POST /api/checkout ─────►│── POST /wc/v3/customers ►│
 │                     │                            │── POST checkout-xendit ──►│
 │                     │◄──── { paymentUrl } ───────│◄──── Xendit link ────────│
 │                     │                            │                          │
 ├── redirect ────────►│ window.location = paymentUrl                          │
 │                     │                            │                          │
 ▼ (Bayar di Xendit)   │                            │                          │
```

---

## File-file Terkait

| Fungsi | File |
|---|---|
| Cart state management | CartContext.tsx |
| Halaman cart | cart.tsx |
| Halaman checkout | checkout.tsx |
| Checkout CSS | Checkout.module.css |
| API checkout | checkout.ts |
| API cek kupon | check-coupon.ts |
| Detail kursus (add to cart) | [pages/courses/[id].tsx](pages/courses/[id].tsx) |
| Auth context | AuthContext.tsx |