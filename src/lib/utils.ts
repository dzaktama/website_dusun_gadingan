/**
 * Generates a WhatsApp API link with a pre-filled message.
 * @param phone - International format without '+' or spaces, e.g. '62812345678'
 * @param productName - Name of the product
 * @param sellerName - Name of the seller
 * @param price - Price of the product in IDR
 */
export function generateWhatsAppLink(
  phone: string,
  productName: string,
  sellerName: string,
  price: number
): string {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  const message = `Halo ${sellerName}, saya tertarik dengan produk *${productName}* (${formattedPrice}) dari Katalog UMKM Dusun Gadingan. Apakah masih tersedia? Terima kasih 🙏`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a number as Indonesian Rupiah.
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}
