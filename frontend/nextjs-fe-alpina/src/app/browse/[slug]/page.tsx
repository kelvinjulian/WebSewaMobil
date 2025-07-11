import { getVehiclesBySlug } from "@/actions";
import { BrowseVehiclesBySlugView } from "@/sections/browse/by-vehicle";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BrowseDetail(props: Props) {
  const params = await props.params;
  const vehiclesBySlug = await getVehiclesBySlug(params);

  return <BrowseVehiclesBySlugView vehiclesBySlug={vehiclesBySlug} />;
}
