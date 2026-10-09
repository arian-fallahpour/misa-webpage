import { StaticImageData } from "next/image";

export interface ExecutiveType {
  name: string;
  program: string;
  year: string;
  bucketList?: string;
  favouriteFood?: string;
}

export interface PostcardType {
  role: string;
  imageSrc?: StaticImageData | null;
  members: ExecutiveType[];
}
