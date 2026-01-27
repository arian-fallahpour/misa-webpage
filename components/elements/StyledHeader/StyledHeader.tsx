import React from "react";
import classes from "./StyledHeader.module.scss";
import { join } from "@/utils/helper-client";

const StyledHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.Header}>
      <div className={join(classes.Line, classes.LineTop)}></div>
      {children}
      <div className={join(classes.Line, classes.LineBottom)}></div>
    </div>
  );
};

export default StyledHeader;
