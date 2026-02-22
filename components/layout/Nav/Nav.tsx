"use client";

import { useState } from "react";
import classes from "./Nav.module.scss";
import Button from "@/components/elements/Button/Button";
import infoData from "@/data/info-data";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";
import MenuIcon from "@/components/icons/MenuIcon";
import { join } from "@/utils/helper-client";

const Nav = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  return (
    <nav className={classes.Nav}>
      <div className={classes.Left}>
        <div className={classes.Logo}>
          <Image src="/images/logo.png" alt="MISA Logo" fill />
        </div>

        <ul className={join(classes.List, isListVisible ? classes.visible : null)}>
          <li className={classes.Item}>
            <Button
              variant="nav"
              href="/"
              onClick={() => (window.innerWidth < 550 ? setIsListVisible(false) : null)}
              isLink
            >
              Home
            </Button>
          </li>
          <li className={classes.Item}>
            <Button
              variant="nav"
              href="/about-us"
              onClick={() => (window.innerWidth < 550 ? setIsListVisible(false) : null)}
              isLink
            >
              About Us
            </Button>
          </li>
          <li className={classes.Item}>
            <Button
              variant="nav"
              href="/events"
              onClick={() => (window.innerWidth < 550 ? setIsListVisible(false) : null)}
              isLink
            >
              Events
            </Button>
          </li>
          {/* Temporarily removed until iran situation calms down */}
          {/* <li className={classes.Item}>
            <Button
              variant="nav"
              href="/our-team"
              onClick={() => (window.innerWidth < 550 ? setIsListVisible(false) : null)}
              isLink
            >
              Our Team
            </Button>
          </li> */}
        </ul>
      </div>
      <div className={classes.Right}>
        <Button className={classes.Join} href={infoData.joinLink} isLink>
          Join Us
          <RightArrowIcon />
        </Button>
        <Button className={classes.Toggle} onClick={() => setIsListVisible(!isListVisible)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
