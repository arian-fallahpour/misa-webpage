import { StaticImageData } from "next/image";

export interface EventType {
  name: string;
  nameFarsi: string;
  imageSrc: string | StaticImageData;
  href?: string | null;
}

export interface EventsYearType {
  name: string;
  events: EventType[];
}
