import classes from "./EventsSection.module.scss";
import { EventType } from "@/Types/EventsTypes";

import Event from "./Event";

const EventsYear = ({ name, events }: { name: string; events: EventType[] }) => {
  return (
    <div className={classes.Year}>
      <div className={classes.YearHeader}>
        <h2 className="header header-subsection margin-bottom-auto">{name}</h2>
      </div>

      <div className={classes.YearEvents}>
        <div className={classes.Events}>
          {events.map((event) => (
            <Event key={event.name} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsYear;
