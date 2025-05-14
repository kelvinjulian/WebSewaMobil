import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  label: string;
  icon: StaticImageData;
  value: string;
};

export const FormItemDetail = ({ label, icon, value }: Props) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-[6px]">
      <Image src={icon} alt={label} width={24} height={24} />
      <p>{label}</p>
    </div>
    <p className="font-semibold">{value}</p>
  </div>
);
