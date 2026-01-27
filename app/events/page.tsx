import Page from "@/components/elements/Page/Page";
import EventsSection from "@/components/sections/EventsSection/EventsSection";
import classes from "./page.module.scss";
import Image from "next/image";
import DancesSection from "@/components/sections/DancesSection/DancesSection";

export default function EventsPage() {
  return (
    <Page>
      <span className={classes.Background1} />
      <div className={classes.Background2}>
        <Image src="/images/events/header.jpeg" alt="board game" fill />
      </div>
      <EventsSection />
      <DancesSection />
    </Page>
  );
}
