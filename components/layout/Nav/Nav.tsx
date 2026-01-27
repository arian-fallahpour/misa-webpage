import React from "react";
import classes from "./Nav.module.scss";
import Button from "@/components/elements/Button/Button";
import infoData from "@/data/info-data";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.Left}>
        <div className={classes.Logo}>
          <Image src="/images/logo.png" alt="MISA Logo" fill />
        </div>
        <ul className={classes.List}>
          <li className={classes.Item}>
            <Button variant="nav" href="/" isLink>
              Home
            </Button>
          </li>
          <li className={classes.Item}>
            <Button variant="nav" href="/about-us" isLink>
              About Us
            </Button>
          </li>
          <li className={classes.Item}>
            <Button variant="nav" href="/events" isLink>
              Events
            </Button>
          </li>
          <li className={classes.Item}>
            <Button variant="nav" href="/our-team" isLink>
              Our Team
            </Button>
          </li>
        </ul>
      </div>
      <div className={classes.Right}>
        <Button href={infoData.joinLink} isLink>
          Join Us
          <RightArrowIcon />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
