import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import "./Footer.css";
import wlogo from "../Assets/whatsapp_logo.png";
import ilogo from "../Assets/instagram_logo.png";
import logo from "../Assets/logo.png";
import elogo from "../Assets/email.png";

const Footer = () => {
  const [openDialog, setOpenDialog] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const handleOpenDialog = (section, content = "") => {
    setOpenDialog(section);
    setDialogContent(content);
  };

  const handleCloseDialog = () => {
    setOpenDialog("");
    setDialogContent("");
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
        <p>VARANASI</p>
      </div>
      <ul className="footer-links">
        <li
          onClick={() =>
            handleOpenDialog(
              "Company",
              "Our platform is dedicated to empowering artisans from Varanasi, showcasing their unique textiles and handicrafts globally. By bridging the gap between traditional craftsmanship and modern technology, we aim to revolutionize the artisan industry with innovation and compassion."
            )
          }
        >
          Company
        </li>
        <li
          onClick={() =>
            handleOpenDialog(
              "About",
              "Our mission is to uplift artisans by providing them with a modern platform to showcase their crafts and connect with global buyers. We combine technology, sustainability, and creativity to preserve India's rich heritage while empowering communities."
            )
          }
        >
          About
        </li>
        <li
          onClick={() =>
            handleOpenDialog(
              "Contact",
            )
          }
        >
          Contact
        </li>
      </ul>
      <div className="footer-social-icons">
        <div
          className="footer-icons-container"
          onClick={() =>
            handleOpenDialog("WhatsApp", "Phone Number: +91 94805 06235")
          }
        >
          <img src={wlogo} alt="WhatsApp" />
        </div>
        <div
          className="footer-icons-container"
          onClick={() =>
            handleOpenDialog("Instagram", "Instagram ID: @suhas_adda")
          }
        >
          <img src={ilogo} alt="Instagram" />
        </div>
        <div
          className="footer-icons-container"
          onClick={() =>
            handleOpenDialog("Email", "Email: nammakfiduniya0@gmail.com")
          }
        >
          <img src={elogo} alt="Email" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>

      {/* Dialog */}
      <Dialog open={!!openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>{openDialog}</DialogTitle>
        <DialogContent>
          {openDialog === "Contact" ? (
            <>
              <p>{dialogContent}</p>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="contact-form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="7f6137c6-fef5-406a-aa04-43f67b98fb86"
                />
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  margin="dense"
                  required
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  margin="dense"
                  required
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Your Query"
                  multiline
                  rows={4}
                  margin="dense"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </form>
            </>
          ) : (
            <p>{dialogContent}</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Footer;
