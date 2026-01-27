import classes from "./DancesSection.module.scss";

import React from "react";
import ReactPlayer from "react-player";

const Performance = ({ title, url }: { title: string; url: string }) => {
  return (
    <div className={classes.Performance}>
      <ReactPlayer className={classes.Player} src={url} />
      <h2 className="header header-text">{title}</h2>
    </div>
  );
};

export default Performance;
