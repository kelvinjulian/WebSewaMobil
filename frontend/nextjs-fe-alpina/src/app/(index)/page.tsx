// "use client";
import { HomeView } from "@/sections/home";
import { getCategories, getPopularVehicles, getVehicles } from "@/actions";

export default async function HomePage() {
  const categories = await getCategories();
  const popularVehicles = await getPopularVehicles();
  const vehicles = await getVehicles();

  console.log(popularVehicles.data);

  return (
    <HomeView
      categories={categories.data}
      popularVehicles={popularVehicles.data}
      vehicles={vehicles.data}
    />
  );
}
