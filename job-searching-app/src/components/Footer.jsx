import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <h1 className="footer-heading ">Follow Us on</h1>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i>
              <FaWhatsappSquare />
            </i>
          </div>
          <div className="footer-social-media-icon">
            <i>
              <FaFacebookSquare />
            </i>
          </div>
          <div className="footer-social-media-icon">
            <i>
              <FaTwitterSquare />
            </i>
          </div>
          <div className="footer-social-media-icon">
            <i>
              <FaInstagramSquare />
            </i>
          </div>
          <div className="footer-social-media-icon">
            <i>
              <FaYoutubeSquare />
            </i>
          </div>
        </div>
        <div className="terms-policy">
          <p>Terms Of Use</p>
          <p> Privacy policy</p>
        </div>
      </footer>
      <div className="copyright">2024 @copyright</div>
    </>
  );
}

export default Footer;
