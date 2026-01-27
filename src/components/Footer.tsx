import footer_mosaic from "../assets/footer_mosaic.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import mail from "../assets/mail.png";

import { IconButton, useMediaQuery } from "@mui/material";

const PageFooter = () => {
  const { baseClassName } = PageFooterConstants;
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <div className={baseClassName}>
      {isSmallScreen ? <></> : <img className={`${baseClassName}-mosaic`} src={footer_mosaic} />}
      <h1 className={`${baseClassName}-header`}>Contact Us</h1>
      <div className={`${baseClassName}-content`}>
        <div className={`${baseClassName}-links`}>
          <div className={`${baseClassName}-link`}>
            <IconButton href="https://www.instagram.com/macmisa">
              <img src={instagram} />
              <a>@macmisa</a>
            </IconButton>
          </div>
          <div className={`${baseClassName}-link`}>
            <IconButton href="https://www.tiktok.com/@mcmastermisa">
              <img src={tiktok} />
              <a>@mcmastermisa</a>
            </IconButton>
          </div>
          <div className={`${baseClassName}-link`}>
            <IconButton href="mailto:Iran@mcmaster.ca">
              <img src={mail} />
              <a>Iran@mcmaster.ca</a>
            </IconButton>
          </div>
        </div>
        <div className={`${baseClassName}-address`}>
          <h4>McMaster Iranian Students Association</h4>
          <h5>McMaster University</h5>
          <h5>1280 Main St W, Hamilton, ON L8S 4L8</h5>
          <span>© Copyright All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

const PageFooterConstants = {
  baseClassName: "page-footer",
};

export default PageFooter;
