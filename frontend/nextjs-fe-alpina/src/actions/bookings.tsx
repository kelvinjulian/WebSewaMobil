import axiosInstance from "@/utils/axiosInstance";

export const checkBooking = async ({
  booking_trx_id,
  phone,
}: {
  booking_trx_id: string;
  phone: string;
}) => {
  const res = await axiosInstance.post(`/check-booking`, {
    booking_trx_id,
    phone,
  });
  return res.data.data;
};
