import { join } from "@/utils/helper-client";
import classes from "./AnnouncementsSection.module.scss";
import Image from "next/image";

const events = [
  { date: "2026-02-05", title: "Vigil at MUSC", imageSrc: null },
  { date: "2026-02-10", title: "HEAS x MISA", imageSrc: null },
  { date: "2026-02-24", title: "General Member Meeting", imageSrc: null },
  { date: "2026-03-03", title: "MISA x SWC Cooking Class", imageSrc: null },
  { date: "2026-03-20", title: "Norouz", imageSrc: null },
];

const CalendarDays = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getEventForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.find((event) => event.date === dateStr);
  };

  const days = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className={join(classes.Day, classes.empty)} />);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    const event = getEventForDate(day);

    days.push(
      <div
        key={`${year}-${month}-${day}`}
        className={join(classes.Day, isToday ? classes.today : null)}
      >
        {event && <div className={classes.Event}>{event.title}</div>}
        <span className={join(classes.DayNumber, event ? classes.light : null)}>{day}</span>
      </div>,
    );
  }

  return <div className={classes.Days}>{days}</div>;
};

export default CalendarDays;
