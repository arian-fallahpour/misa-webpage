import { EventType } from "../../Types/EventType";
import Event from "./Event";

interface EventsContainerProps {
  events: EventType[];
  start_date: string;
  end_date: string;
  title_color: string;
}

const EventsContainer = (props: EventsContainerProps) => {
  const { events, start_date, end_date, title_color } = props;
  const { baseClassName } = EventsContainer.constants;
  return (
    <div className={baseClassName}>
      <div
        className={`${baseClassName}-title`}
        style={{ color: `${title_color}` }}
      >
        {start_date}-{end_date} Year
      </div>
      <div className={`${baseClassName}-events`}>
        {events.map((elm: EventType) => (
          <Event
            name_en={elm.name_en}
            name_farsi={elm.name_farsi}
            img_url={elm.img_url}
            url={elm.url}
          />
        ))}
      </div>
    </div>
  );
};

EventsContainer.constants = {
  baseClassName: "events-container",
};

export default EventsContainer;
