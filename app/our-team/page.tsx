import Page from "@/components/elements/Page/Page";
import AlumniSection from "@/components/sections/AlumniSection/AlumniSection";
import ExecutivesSection from "@/components/sections/ExecutivesSection/ExecutivesSection";
import classes from "./page.module.scss";
import Image from "next/image";

export default function OurTeamPage() {
  return (
    <Page>
      <span className={classes.Background} />
      <div className={classes.Image}>
        <Image src="/images/team/header.jpg" alt="patterns" sizes="100wv" priority fill />
      </div>
      <div className={classes.Overlay}></div>
      <ExecutivesSection />
      <AlumniSection />
    </Page>
  );
}
