import Page from "@/components/elements/Page/Page";
import Header from "@/components/layout/Header/Header";
import AnnouncementsSection from "@/components/sections/AnouncementsSection/AnnouncementsSection";
import classes from "./page.module.scss";

export default function HomePage() {
  return (
    <Page>
      <Header />
      <AnnouncementsSection />
    </Page>
  );
}
