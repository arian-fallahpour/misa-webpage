import Image from "next/image";
import React from "react";
import classes from "./Header.module.scss";
import infoData from "@/data/info-data";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Image}>
        <Image
          src="/images/header-3.jpeg"
          alt="MISA Logo"
          sizes="100wv"
          quality={75}
          priority
          fill
        />
      </div>
      <div className={classes.Overlay}></div>
      <div className={classes.Content}>
        <h1 className="header header-title text-light text-center">{infoData.name}</h1>
        {/* <p className="paragraph text-light text-center">
          MISA is a non-profit student organization at McMaster University, dedicated to bringing
          together the Iranian community through social gatherings and cultural events.
        </p> */}
      </div>
    </header>
  );
};

export default Header;
