import Image from "next/image";
import Logo from "@/assets/images/logos/logo.svg";
import LocationBorder from "@/assets/images/icons/location-border.svg";

export function TopBar() {
  return (
    <div
      id="Top-Bar"
      className="flex items-center justify-between px-4 mt-[60px] z-10"
    >
      <Image src={Logo} className="flex shrink-0 w-[126px]" alt="icon" />
      <div className="flex items-center justify-end gap-3">
        <div className="text-right">
          <p className="text-sm leading-[21px] text-alpina-grey">
            Your Location
          </p>
          <p className="font-semibold">Indonesia</p>
        </div>
        <Image
          width={10}
          src={LocationBorder}
          className="w-10 h-10 flex shrink-0"
          alt="icon"
        />
      </div>
    </div>
  );
}
