import { getVehiclesBySlug } from "@/actions";
import { BrowseVehiclesBySlugView } from "@/sections/browse/by-vehicle";

type Props = {
  params: { slug: string };
};

export default async function BrowseDetail({ params }: Props) {
  const vehiclesBySlug = await getVehiclesBySlug(params);

  return <BrowseVehiclesBySlugView vehiclesBySlug={vehiclesBySlug} />;
}
