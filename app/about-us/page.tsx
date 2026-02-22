import Page from "@/components/elements/Page/Page";
import classes from "./page.module.scss";
import AboutUsSection from "@/components/sections/AboutUsSection/AboutUsSection";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <Page>
      <div className={classes.Background}>
        <Image src="/images/about/header-1.jpg" alt="board game" sizes="100wv" priority fill />
        <h1 className="header header-title text-light">About Us</h1>
      </div>
      <AboutUsSection />
    </Page>
  );
}
