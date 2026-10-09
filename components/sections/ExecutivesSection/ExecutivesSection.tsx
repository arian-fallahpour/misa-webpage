import Section from "@/components/elements/Section/Section";
import classes from "./ExecutivesSection.module.scss";
import Image from "next/image";
import StyledHeader from "@/components/elements/StyledHeader/StyledHeader";

import teamData, { teamTerm } from "@/data/team-data";
import { join } from "@/utils/helper-client";
import Stamp from "@/components/elements/Stamp/Stamp";
import { ExecutiveType, PostcardType } from "@/Types/TeamTypes";

const Postmark = ({ className }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 200 100" aria-hidden="true">
      <path d="M0 32 q 10 -7 20 0 t 20 0 t 20 0 t 20 0 t 20 0" />
      <path d="M0 50 q 10 -7 20 0 t 20 0 t 20 0 t 20 0 t 20 0" />
      <path d="M0 68 q 10 -7 20 0 t 20 0 t 20 0 t 20 0 t 20 0" />
      <circle cx="150" cy="50" r="46" />
      <circle cx="150" cy="50" r="38" />
      <text x="150" y="48" textAnchor="middle">
        MISA
      </text>
      <text x="150" y="68" textAnchor="middle">
        {teamTerm}
      </text>
    </svg>
  );
};

const Executive = ({ name, program, year, bucketList, favouriteFood }: ExecutiveType) => {
  return (
    <div className={classes.Executive}>
      <h3 className={classes.ExecutiveName}>{name}</h3>
      <p className={classes.ExecutiveProgram}>
        {program} &middot; Year {year}
      </p>
      {bucketList && (
        <p className={classes.ExecutiveNote}>
          <span className={classes.ExecutiveNoteLabel}>Iran bucket list</span>
          {bucketList}
        </p>
      )}
      {favouriteFood && (
        <p className={classes.ExecutiveNote}>
          <span className={classes.ExecutiveNoteLabel}>Fave Persian food</span>
          {favouriteFood}
        </p>
      )}
    </div>
  );
};

const Postcard = ({
  role,
  imageSrc,
  members,
  isFlipped,
}: PostcardType & {
  isFlipped: boolean;
}) => {
  const isPair = members.length > 1;

  return (
    <li
      className={join(
        classes.Postcard,
        isPair ? classes.PostcardPair : classes.PostcardSingle,
        isFlipped ? classes.flipped : null
      )}
    >
      <Stamp className={classes.PostcardStamp} innerClassName={classes.PostcardStampInner}>
        <Image
          src={imageSrc || "/images/team/blank.jpg"}
          alt={imageSrc ? members.map(({ name }) => name).join(" and ") : ""}
          sizes={
            isPair
              ? "(max-width: 700px) 90vw, (max-width: 1100px) 55vw, 35vw"
              : "(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
          }
          fill
        />
      </Stamp>
      <div className={classes.PostcardBack}>
        <Postmark className={classes.PostcardPostmark} />
        <h2 className={classes.PostcardRole}>{role}</h2>
        {members.map((member) => (
          <Executive key={member.name} {...member} />
        ))}
      </div>
    </li>
  );
};

const ExecutivesSection = () => {
  // Alternate which side the photo sits on for consecutive shared postcards
  const pairs = teamData.filter(({ members }) => members.length > 1);

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
      <ul className={classes.Postcards}>
        {teamData.map((postcard) => (
          <Postcard
            key={postcard.members[0].name}
            {...postcard}
            isFlipped={pairs.indexOf(postcard) % 2 === 1}
          />
        ))}
      </ul>
    </Section>
  );
};

export default ExecutivesSection;
