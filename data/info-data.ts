import EmailIcon from "@/components/icons/EmailIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { JSX } from "react";

type SocialsDataType = {
  Icon: (props: JSX.IntrinsicAttributes) => JSX.Element;
  handle: string;
  href: string;
};

const infoData: {
  name: string;
  university: string;
  address: string;
  joinLink: string;
  socials: { [key: string]: SocialsDataType };
} = {
  name: "McMaster Iranian Students' Association",
  university: "McMaster University",
  address: "1280 Main St W, Hamilton, ON L8S 4L8",
  joinLink: "https://www.bouncelife.com/groups/6686e4c1efcca68a7cd39dc7",
  socials: {
    instagram: {
      Icon: InstagramIcon,
      handle: "@macmisa",
      href: "https://www.instagram.com/macmisa",
    },
    tiktok: {
      Icon: TikTokIcon,
      handle: "@mcmastermisa",
      href: "https://www.tiktok.com/@mcmastermisa",
    },
    email: {
      Icon: EmailIcon,
      handle: "iran@mcmaster.ca",
      href: "mailto:iran@mcmaster.ca",
    },
  },
};

export default infoData;
