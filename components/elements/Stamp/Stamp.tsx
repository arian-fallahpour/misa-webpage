import { join } from "@/utils/helper-client";
import classes from "./Stamp.module.scss";

const Stamp = ({
  className,
  innerClassName,
  children,
}: {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={join(className, classes.Stamp)}>
      <div className={join(innerClassName, classes.Content)}>{children}</div>
    </div>
  );
};

export default Stamp;
