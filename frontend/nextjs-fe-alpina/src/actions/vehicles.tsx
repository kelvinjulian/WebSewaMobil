import axiosInstance from "@/utils/axiosInstance";

// ----------------------------------------------------------------------

export async function getVehicles() {
  const res = await axiosInstance.get(`vehicles`);

  return res.data;
}

export async function getPopularVehicles() {
  const res = await axiosInstance.get(`vehicles/popular`);

  return res.data;
}

export async function getVehiclesBySlug({ slug }: { slug: string | null }) {
  const res = await axiosInstance.get(`vehicle/${slug}`);

  return res.data.data;
}
