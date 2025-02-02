import { Category, Vehicle } from "@/types";
import { TopBar } from "./top-bar";
import {
  CategoryCard,
  // PopularVehiclesCard,
  // VehiclesCard,
} from "@/components/card";

type Props = {
  categories: Category[];
  popularVehicles: Vehicle[];
  vehicles: Vehicle[];
};

export function HomeView(categories, popularVehicles, vehicles): Props {
  return (
    <>
      <TopBar />
      <CategoryCard categories={categories} />
      {/* <PopularVehiclesCard
        title="Start Your Adventure"
        popularVehicles={popularVehicles}
      />
      <VehiclesCard vehicles={vehicles} /> */}
    </>
  );
}
