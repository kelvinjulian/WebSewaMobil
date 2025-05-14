export function formatRupiah(amount: number): string {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "IDR",
  };

  return new Intl.NumberFormat("id-ID", options).format(amount);
}
