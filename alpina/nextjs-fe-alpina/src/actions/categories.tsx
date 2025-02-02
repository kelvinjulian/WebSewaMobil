import axiosInstance from '@/utils/axiosInstance';

// ----------------------------------------------------------------------

export async function getCategories() {
  const res = await axiosInstance.get(`categories`);

  return res.data;
}

export async function getVehiclesByCategory({ slug }: { slug: string | null }) {
  const res = await axiosInstance.get(`category/${slug}`);

  return res.data.data;
}
