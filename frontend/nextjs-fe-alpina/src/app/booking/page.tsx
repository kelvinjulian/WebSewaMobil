import { getVehiclesBySlug } from "@/actions";
import { BookingView } from "@/sections/booking";

type Props = {
  searchParams: Promise<{ slug?: string }>;
};

export default async function Booking(props: Props) {
  const searchParams = await props.searchParams;
  const { slug } = searchParams;

  if (!slug) {
    return <div>Vehicle not found</div>;
  }

  const vehiclesBySlug = await getVehiclesBySlug({ slug });

  return <BookingView vehiclesBySlug={vehiclesBySlug} />;
}
