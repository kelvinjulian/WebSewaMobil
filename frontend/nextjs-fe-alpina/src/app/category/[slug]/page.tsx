import { BrowseVehiclesByCategoryView } from "@/sections/browse/by-category";
import { getVehiclesByCategory, getPopularVehicles } from "@/actions";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Category | Alpina`,
    description: `Explore the best items in the ${slug} category on our platform.`,
  };
}

export default async function BrowseByCategory(props: Props) {
  const params = await props.params;
  const popularVehicles = await getPopularVehicles();

  const vehiclesByCategory = await getVehiclesByCategory(params);

  return (
    <BrowseVehiclesByCategoryView
      vehiclesByCategory={vehiclesByCategory}
      popularVehicles={popularVehicles.data}
    />
  );
}
