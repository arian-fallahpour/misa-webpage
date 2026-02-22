import Section from "@/components/elements/Section/Section";
import classes from "./ExecutivesSection.module.scss";
import Image, { StaticImageData } from "next/image";
import StyledHeader from "@/components/elements/StyledHeader/StyledHeader";

import teamData from "@/data/team-data";
import { join } from "@/utils/helper-client";
import Stamp from "@/components/elements/Stamp/Stamp";

const Executive = ({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: StaticImageData;
}) => {
  return (
    <li className={classes.Executive}>
      <div className={classes.ExecutiveContent}>
        <Stamp className={classes.ExecutiveStamp} innerClassName={classes.ExecutiveStampInner}>
          <Image
            src={imageSrc || "/images/team/blank.jpg"}
            alt={name}
            sizes="(max-width: 500px) 35vw, (max-width: 800px) 25vw, 20vw"
            // quality={50}
            fill
          />
          <div className={join(classes.ExecutiveName, "header-card")}>{name}</div>
        </Stamp>
        <div className={classes.ExecutiveRole}>{role}</div>
      </div>
    </li>
  );
};

const ExecutivesSection = () => {
  return (
    <Section className={classes.ExecutivesSection}>
      <StyledHeader>
        <h1 className="header header-section text-light margin-bottom-auto">
          Meet our Executive Members
        </h1>
        <p className="paragraph text-light">
          Our executive team is dedicated to fostering a vibrant community at McMaster University
          that celebrates Iranian culture and values. Through their hard work, they promote
          meaningful connections, cultural understanding, and a shared sense of belonging for both
          Iranians and non-Iranians alike.
        </p>
      </StyledHeader>
      <ul className={classes.Executives}>
        {teamData.map(({ name, role, imageSrc }) => (
          <Executive key={name} name={name} role={role} imageSrc={imageSrc || null} />
        ))}
      </ul>
    </Section>
  );
};

export default ExecutivesSection;
