"use client";

import classes from "./AnnouncementsSection.module.scss";

import StyledHeader from "@/components/elements/StyledHeader/StyledHeader";

import Section from "@/components/elements/Section/Section";

import CalendarDays from "../AnouncementsSection/CalendarDays";
import calendarData from "@/data/calendar-data";
import Link from "next/link";
import FormIcon from "@/components/icons/FormIcon";
import SocialIcon from "@/components/icons/SocialIcon";
import Image from "next/image";

const links = [
  {
    Icon: FormIcon,
    title: "Student Wellness Centre Group Counselling Interest Form",
    href: "https://forms.gle/e7X1DbZPutNTYjCr7",
  },
  {
    Icon: FormIcon,
    title: "Canadian Universities Joint Statement on Ongoing Events in Iran",
    href: "https://docs.google.com/document/d/19T15StJWuSt_1XhIFTfBkQr87c8g_4EmxmDbZUnWZVs/edit?usp=sharing",
  },
  {
    Icon: FormIcon,
    title: "MISA Email Templates",
    href: "https://docs.google.com/document/d/187ywLBoVB0L9fFEy_y_Nto9wFe48Gz_Bptnx0tQ1WyI/edit?usp=drivesdk",
  },
  {
    Icon: SocialIcon,
    title: "Join us on Bounce!",
    href: "https://www.bouncelife.com/groups/6686e4c1efcca68a7cd39dc7",
  },
];

const AnnouncementsSection = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return (
    <Section className={classes.AnnouncementsSection}>
      <StyledHeader>
        <h1 className="header header-section">Announcements</h1>
        <p className="paragraph">Here&apos;s what we&apos;ve been up to!</p>
      </StyledHeader>

      <div className={classes.Main}>
        <div className={classes.Content}>
          <h2 className="header header-card text-center">Important Links</h2>
          <div className={classes.Links}>
            {links.map((data) => (
              <Link key={data.title} className={classes.Link} href={data.href}>
                <data.Icon className={classes.LinkIcon} />
                {data.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.Calendar}>
          {/* <Image src="/images/map.jpg" alt="Map" className={classes.Image} fill /> */}

          <div className={classes.CalendarContent}>
            <div className={classes.CalendarHeader}>
              <h3 className="header header-card">
                {calendarData.months[month]} {year}
              </h3>
            </div>

            <div className={classes.Weekdays}>
              {calendarData.weekdays.map((day) => (
                <div key={day} className={classes.Weekday}>
                  {day}
                </div>
              ))}
            </div>

            <CalendarDays />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AnnouncementsSection;
