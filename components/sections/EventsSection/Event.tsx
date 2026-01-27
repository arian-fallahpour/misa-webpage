import classes from "./EventsSection.module.scss";

import { EventType } from "@/Types/EventsTypes";
import Image from "next/image";
import Link from "next/link";

const Event = ({ name, nameFarsi, imageSrc, href }: EventType) => {
  const nameElements = (
    <>
      <h2 className={classes.EventNameFarsi}>{nameFarsi}</h2>
      <h3 className="header header-card text-light">{name}</h3>
    </>
  );

  return (
    <div className={classes.Event} key={name}>
      <Image src={imageSrc} alt={name} fill />
      <div className={classes.EventGradient} />
      <div className={classes.EventShine} />

      {href ? (
        <Link className={classes.EventLink} href={href}>
          {nameElements}
        </Link>
      ) : (
        <div className={classes.EventLink}>{nameElements}</div>
      )}
    </div>
  );
};

export default Event;
