import Page from "@/components/elements/Page/Page";
import classes from "./page.module.scss";
import AboutUsSection from "@/components/sections/AboutUsSection/AboutUsSection";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <Page>
      <div className={classes.Background}>
        <Image src="/images/about/header-1.jpg" alt="board game" fill />
      </div>
      <AboutUsSection />
    </Page>
  );
}
