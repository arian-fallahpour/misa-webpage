import EventsContainer from "./EventsContainer";
import { EVENTS_25_26 } from "../../constants/events_25_26/events_25_26";
import { EVENTS_24_25 } from "../../constants/events_24_25/events_24_25";
import { EVENTS_23_24 } from "../../constants/events_23_24/events_23_24";
import { EVENTS_22_23 } from "../../constants/events_22_23/events_22_23";
import mosaic_events_1 from "../../assets/events-images/mosaic_events_1.png";
import mosaic_events_2 from "../../assets/events-images/mosaic_events_2.png";
import mosaic_events_3 from "../../assets/events-images/mosaic_events_3.png";
import { bahar_dances } from "../../constants/bahar_dances";
import BaharContainer from "./BaharContainer";

const EventsPage = () => {
  const { baseClassName } = EventsPage.constants;

  return (
    <>
      <img className={`${baseClassName}-mosaic-2`} src={mosaic_events_2} />
      <img className={`${baseClassName}-mosaic-3`} src={mosaic_events_3} />
      <div className={baseClassName}>
        <div className={`${baseClassName}-header`}>
          <div className={`${baseClassName}-header-texts`}>
            <h1>Stay Up-to-Date with Our Latest Event</h1>
            <h3></h3>
            {/* <p>Join us as we celebrate Norooz, the Persian New Year, a time for renewal, reflection, 
              and festive joy! This cultural event is a fantastic opportunity to experience the rich 
              traditions and customs of the Persian New Year, which marks the first day of spring and 
              the beginning of the year in the Iranian calendar.</p> */}
          </div>
        </div>
        <h1 className={`${baseClassName}-header-title`}>Previous Events</h1>
        <img className={`${baseClassName}-mosaic-1`} src={mosaic_events_1} />
        <EventsContainer
          events={EVENTS_25_26}
          start_date={"2025"}
          end_date={"2026"}
          title_color={"#D99438"}
        />
        <EventsContainer
          events={EVENTS_24_25}
          start_date={"2024"}
          end_date={"2025"}
          title_color={"#4DB3C4"}
        />
        <EventsContainer
          events={EVENTS_23_24}
          start_date={"2023"}
          end_date={"2024"}
          title_color={"#D99438"}
        />
        <EventsContainer
          events={EVENTS_22_23}
          start_date={"2022"}
          end_date={"2023"}
          title_color={"#4DB3C4"}
        />
        <div className={`${baseClassName}-bahar`}>
          <h1 className={`${baseClassName}-bahar-title`}>Bahar Dance Performances</h1>
          <p className={`${baseClassName}-bahar-text`}>
            Dance is a cherished cornerstone of Iranian cultural heritage, embodying the spirit and
            traditions of our community. We are deeply committed to honoring and preserving this art
            form through our annual performances at McMaster Pangaea. These events celebrate the
            cultural diversity of McMaster University and foster harmony within our community.
          </p>
          <p> Click below to watch our performances from over the years. </p>
          <p>
            We extend our heartfelt gratitude to the Bahar Dance Group and our talented dancers for
            their exquisite choreography and dedication to showcasing Iranian culture.
          </p>
          <div className={`${baseClassName}-bahar-videos`}>
            {bahar_dances.map((elm) => {
              return <BaharContainer title={elm.title} url={elm.url} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

EventsPage.constants = {
  baseClassName: "events-page",
};

export default EventsPage;
