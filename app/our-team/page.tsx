import Page from "@/components/elements/Page/Page";
import AlumniSection from "@/components/sections/AlumniSection/AlumniSection";
import ExecutivesSection from "@/components/sections/ExecutivesSection/ExecutivesSection";
import classes from "./page.module.scss";
import Image from "next/image";

export default function OurTeamPage() {
  return (
    <Page>
      <span className={classes.Background1} />
      <div className={classes.Background2}>
        <Image src="/images/team/header.jpg" alt="patterns" fill />
      </div>
      <ExecutivesSection />
      <AlumniSection />
    </Page>
  );
}
