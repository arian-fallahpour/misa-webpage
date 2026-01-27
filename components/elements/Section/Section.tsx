import { join } from "@/utils/helper-client";
import classes from "./Section.module.scss";

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <section className={join(classes.Section, className)}>{children}</section>;
};

export default Section;
