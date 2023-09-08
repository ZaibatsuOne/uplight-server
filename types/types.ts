import { StaticImageData } from "next/image";

export interface IPricingBlock {
  id: number;
  title: string;
  inGamePrice: number;
  permanentlyPrice: number;
  options: string[];
}

export interface IContactBlock {
  id: number;
  icon: StaticImageData;
  title: string;
  subtitle: string;
}
