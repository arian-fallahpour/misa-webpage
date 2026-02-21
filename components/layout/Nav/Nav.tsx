"use client";

import { useState } from "react";
import classes from "./Nav.module.scss";
import Button from "@/components/elements/Button/Button";
import infoData from "@/data/info-data";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";
import MenuIcon from "@/components/icons/MenuIcon";

const Nav = () => {
  const [isListVisible, setIsListVisible] = useState(true);

  return (
    <nav className={classes.Nav}>
      <div className={classes.Left}>
        <div className={classes.Logo}>
          <Image src="/images/logo.png" alt="MISA Logo" fill />
        </div>

        {isListVisible && (
          <ul className={classes.List}>
            <li className={classes.Item}>
              <Button variant="nav" href="/" isLink>
                Home
              </Button>
            </li>
            <li className={classes.Item}>
              <Button variant="nav" href="/about-us" onClick={() => setIsListVisible(false)} isLink>
                About Us
              </Button>
            </li>
            <li className={classes.Item}>
              <Button variant="nav" href="/events" onClick={() => setIsListVisible(false)} isLink>
                Events
              </Button>
            </li>
            <li className={classes.Item}>
              <Button variant="nav" href="/our-team" onClick={() => setIsListVisible(false)} isLink>
                Our Team
              </Button>
            </li>
          </ul>
        )}
      </div>
      <div className={classes.Right}>
        <Button className={classes.Join} href={infoData.joinLink} isLink>
          Join Us
          <RightArrowIcon />
        </Button>
        <Button
          className={classes.Toggle}
          variant="light"
          onClick={() => (window.innerWidth < 550 ? setIsListVisible(!isListVisible) : null)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
