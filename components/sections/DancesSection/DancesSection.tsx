import classes from "./DancesSection.module.scss";

import Section from "@/components/elements/Section/Section";
import StyledHeader from "@/components/elements/StyledHeader/StyledHeader";
import Performance from "./Performance";

import dancesData from "@/data/dances-data";

const DancesSection = () => {
  return (
    <Section className={classes.DancesSection}>
      <StyledHeader>
        <h1 className="header header-section margin-bottom-auto">Bahar Dance Performances</h1>
        <p className="paragraph margin-bottom-auto">
          Dance is a cherished cornerstone of Iranian cultural heritage, embodying the spirit and
          traditions of our community. We are deeply committed to honoring and preserving this art
          form through our annual performances at McMaster Pangaea. These events celebrate the
          cultural diversity of McMaster University and foster harmony within our community.
        </p>
        <p className="paragraph margin-bottom-auto">
          Click below to watch our performances from over the years.
        </p>
        <p className="paragraph">
          We extend our heartfelt gratitude to the Bahar Dance Group and our talented dancers for
          their exquisite choreography and dedication to showcasing Iranian culture.
        </p>
      </StyledHeader>
      <div className={classes.Content}>
        {dancesData.map((p) => (
          <Performance key={p.title} title={p.title} url={p.url} />
        ))}
      </div>
    </Section>
  );
};

export default DancesSection;
