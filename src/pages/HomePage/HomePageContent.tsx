import { Snackbar, Alert, Button, TextField } from "@mui/material";
import homepage_image_1 from "../../assets/home-images/homepage_img1.png";
import homepage_image_2 from "../../assets/home-images/homepage_img2.png";
import homepage_image_3 from "../../assets/home-images/homepage_img3.png";
import homepage_mosaic_1 from "../../assets/home-images/mosaic_home_1.png";
import homepage_mosaic_2 from "../../assets/home-images/mosaic_home_2.png";
import homepage_mosaic_3 from "../../assets/home-images/mosaic_home_3.png";
import homepage_mosaic_4 from "../../assets/home-images/mosaic_home_4.png";
import { useState } from "react";

const HomePageContent = () => {
  const { baseClassName } = HomePageContent.constants;

  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  const handleEmailSend = async () => {
    if (!email.trim()) return false;
    if (validateEmail(email)) {
      try {
        setEmail("");
        const response = await fetch(
          "https://m7arf80gya.execute-api.us-east-1.amazonaws.com/Subscribe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        const result = response.json;
        console.log(result);
        setSnackbarMessage("Email sent successfully");
        setSnackbarSeverity("success");
      } catch (error) {
        console.error(error);
        setSnackbarMessage("Unexpected server error, please try again");
        setSnackbarSeverity("error");
      }
    } else {
      // Email format is incorrect.
      setSnackbarMessage("Incorrect mcmaster email format");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEmailSend();
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@mcmaster\.ca$/i;
    return regex.test(email);
  };

  // removed bc mentorship is removed
  const showError = (message: string) => {
    setSnackbarOpen(true);
    setSnackbarMessage(message);
    setSnackbarSeverity("error");
  };

  return (
    <>
      <div className={baseClassName}>
        <div className={`${baseClassName}-images`}>
          <img src={homepage_image_1} className={`${baseClassName}-images_1`} />
          <img src={homepage_image_2} className={`${baseClassName}-images_2`} />
          <img src={homepage_image_3} className={`${baseClassName}-images_3`} />
        </div>
        <div className={`${baseClassName}-join`}>
          <h2>Join Us!</h2>
          <h5>Sign up to be a member and join us for events and more!</h5>
          <Button
            className={`${baseClassName}-join-button`}
            // onClick={() => showError("Form currently unavailable")} // when apps are not available, uncomment this
            href="https://docs.google.com/forms/d/e/1FAIpQLSc38D8d_zdfkiTTPccQoYCQmUlP_J2Emvo0wa5L0OAv81n03A/viewform"
          >
            Fill out the form!
          </Button>
        </div>
        <img src={homepage_mosaic_1} className={`${baseClassName}-mosaic_1`} />
        <img src={homepage_mosaic_2} className={`${baseClassName}-mosaic_2`} />
      </div>

      <div className={`${baseClassName}-mentorship`}>
        <div className={`${baseClassName}-mentorship-desc`}>
          <h2>MISA Mentorship Program</h2>
          <h5>
            Connect, learn, and grow with the MISA Mentorship Program! Level I and II students can
            join as mentees, while Level III and above can guide others as mentors.
          </h5>
        </div>
        <div className={`${baseClassName}-mentorship-links`}>
          <Button
            className={`${baseClassName}-mentorship-links-button`}
            onClick={() => showError("Mentor Applications are Currently Closed")}
          >
            Mentor Applications
          </Button>
          <Button
            className={`${baseClassName}-mentorship-links-button`}
            onClick={() => showError("Mentee Applications are Currently Closed")}
          >
            Mentee Applications
          </Button>
        </div>
        <img src={homepage_mosaic_3} className={`${baseClassName}-mosaic_3`} />
      </div>

      <div className={`${baseClassName}-subscribe`}>
        <img src={homepage_mosaic_4} className={`${baseClassName}-mosaic_4`} />
        <h1>Stay in the Know!</h1>
        <div className={`${baseClassName}-subscribe-desc`}>
          <h2>Subscribe to Our Newsletter!</h2>
          <h5>Stay in the loop! Sign up for our newsletter to stay updated!</h5>
          <div className={`${baseClassName}-subscribe-input`}>
            <TextField
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              label="Email"
              className={`${baseClassName}-subscribe-input-text`}
              placeholder="Enter a valid mcmaster email address"
              variant="outlined"
              sx={{ borderColor: "white" }}
            />
            <Button sx={{ backgroundColor: "red" }} onClick={handleEmailSend}>
              Sign Up!
            </Button>
            <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
              <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </>
  );
};

HomePageContent.constants = {
  baseClassName: "home-page-content",
};

export default HomePageContent;
