import Page from "@/components/elements/Page/Page";
import Header from "@/components/layout/Header/Header";
import AnnouncementsSection from "@/components/sections/AnouncementsSection/AnnouncementsSection";

export default function HomePage() {
  return (
    <Page>
      <Header />
      <AnnouncementsSection />
    </Page>
  );
}
