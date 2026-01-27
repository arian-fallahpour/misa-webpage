import classes from "./Footer.module.scss";

import infoData from "@/data/info-data";
import Button from "@/components/elements/Button/Button";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <h3 className="header header-section text-light">Contact Us</h3>

      <div className={classes.FooterContent}>
        <ul className={classes.FooterContact}>
          <li>
            <Button href={infoData.socials.instagram.href} variant="glass" isLink>
              <infoData.socials.instagram.Icon />
              {infoData.socials.instagram.handle}
            </Button>
          </li>
          <li>
            <Button href={infoData.socials.tiktok.href} variant="glass" isLink>
              <infoData.socials.tiktok.Icon />
              {infoData.socials.tiktok.handle}
            </Button>
          </li>
          <li>
            <Button href={infoData.socials.email.href} variant="glass" isLink>
              <infoData.socials.email.Icon />
              {infoData.socials.email.handle}
            </Button>
          </li>
        </ul>
        <div className={classes.FooterInfo}>
          <h4 className="header header-card text-light">{infoData.name}</h4>

          <p className="paragraph text-light">{infoData.university}</p>
          <p className="paragraph text-light">{infoData.address}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
