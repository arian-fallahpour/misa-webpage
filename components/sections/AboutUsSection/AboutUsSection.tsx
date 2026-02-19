import Section from "@/components/elements/Section/Section";
import classes from "./AboutUsSection.module.scss";
import Image from "next/image";
import Button from "@/components/elements/Button/Button";
import infoData from "@/data/info-data";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ExternalIcon from "@/components/icons/ExternalIcon";
import Stamp from "@/components/elements/Stamp/Stamp";

const AboutUsSection = () => {
  return (
    <Section className={classes.AboutUsSection}>
      <Image className={classes.Background} src="/images/cyrus.avif" alt="cyrus the great" fill />
      <div className={classes.Left}>
        <div className={classes.Main}>
          <h2 className="header header-section margin-bottom-auto">About Us</h2>
          <p className="paragraph margin-bottom-auto">
            MISA is a student-led organization dedicated to celebrating the persian culture and
            fostering a sense of community among students interested in Iran&apos;s rich heritage.
          </p>
          <p className="paragraph margin-bottom-auto">
            We organize cultural events, social gatherings, and educational workshops to promote
            understanding and appreciation of Persian traditions, history, and arts.
          </p>
          <p className="paragraph margin-bottom-auto">
            Whether you&apos;re of Persian descent or simply interested in learning more about our
            vibrant culture, MISA welcomes you to join us in our mission to create a diverse and
            inclusive community at McMaster University.
          </p>
        </div>
        <div className={classes.Buttons}>
          <Button href="/events" isLink>
            View Events
            <CalendarIcon />
          </Button>
          <Button href={infoData.joinLink} variant="text" isLink>
            Get Involved
            <RightArrowIcon />
          </Button>
        </div>
      </div>
      <div className={classes.Right}>
        <Stamp className={classes.Image}>
          <Image src="/images/join/join-1.png" alt="join us" fill />
        </Stamp>
        <Stamp className={classes.Image}>
          <Image src="/images/join/join-2.png" alt="join us" fill />
        </Stamp>
        <Stamp className={classes.Image}>
          <Image src="/images/join/join-3.png" alt="join us" fill />
        </Stamp>
      </div>

      <div className={classes.Join}>
        <div className={classes.JoinLeft}>
          <Stamp className={classes.JoinImage}>
            <Image src="/images/join/join-4.jpg" alt="join us" fill />
          </Stamp>
          <div className={classes.JoinText}>
            <Image src="/images/join/join-5.png" alt="join us" fill />
          </div>
        </div>
        <div className={classes.JoinContent}>
          <h2 className="header header-section margin-bottom-auto">Join as a General Member!</h2>
          <p className="paragraph">
            Be a part of our culture by joining our Bounce Life organization and get alerts when a
            new event gets announced.
          </p>
          <Button href="https://www.bouncelife.com/organizations/6686e4c1efcca68a7cd39dc7" isLink>
            Join Now
            <ExternalIcon />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsSection;
