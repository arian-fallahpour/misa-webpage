import React from "react";
import classes from "./StyledHeader.module.scss";
import { join } from "@/utils/helper-client";

const StyledHeader = ({
  className,
  lineClassName,
  children,
}: {
  className?: string;
  lineClassName?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={join(classes.Header, className)}>
      <div className={join(classes.Line, classes.LineTop, lineClassName)}></div>
      {children}
      <div className={join(classes.Line, classes.LineBottom, lineClassName)}></div>
    </div>
  );
};

export default StyledHeader;
