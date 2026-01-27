import Section from "@/components/elements/Section/Section";
import classes from "./AlumniSection.module.scss";

import alumniData from "@/data/alumni-data";
import StyledHeader from "@/components/elements/StyledHeader/StyledHeader";

const AlumniSection = () => {
  return (
    <Section>
      <StyledHeader>
        <h1 className="header header-section margin-bottom-auto">Alumni & Volunteers</h1>
        <p className="paragraph">
          We sincerely thank our alumni and volunteers for their dedication and hard work over the
          years. Their contributions have been instrumental in shaping our community and bringing
          our vision to life.
        </p>
      </StyledHeader>
      <ul className={classes.List}>
        {alumniData.map((name) => (
          <li className={classes.Item} key={name}>
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default AlumniSection;
