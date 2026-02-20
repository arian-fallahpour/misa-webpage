"use client";

import Section from "@/components/elements/Section/Section";
import classes from "./EventsSection.module.scss";

import YearEvents from "./EventsYear";
import eventsData from "@/data/events-data";
import StyledHeader from "@/components/elements/StyledHeader/StyledHeader";

const EventsSection = () => {
  return (
    <Section className={classes.EventsSection}>
      <StyledHeader>
        <h1 className="header header-section margin-bottom-auto text-light">Events</h1>
        <p className="paragraph text-light">
          Take a look at some of the events we&apos;ve had in the past!
        </p>
      </StyledHeader>

      <div className={classes.Years}>
        {eventsData.map((yearData) => (
          <YearEvents key={yearData.name} name={yearData.name} events={yearData.events} />
        ))}
      </div>
    </Section>
  );
};

export default EventsSection;
