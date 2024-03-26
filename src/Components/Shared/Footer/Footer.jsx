import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import fontStyles from "./fontStyles.module.scss"; // Import font styles
const Footer = () => {
  return (
    <footer className={`${styles.Container} ${fontStyles.PhilosopherFont}`}>
      <div className={styles.posua}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dclhahfvz/image/upload/v1710953023/New_Posua_logo_kyknan.png"
            alt="Posua Logo"
          />
        </Link>
      </div>
      <div className={styles.content}>
        {/* Contact */}
        <div className={styles.Contact}>
          <div className={styles.Cntct} style={{ textDecoration: "underline" }}>
            <p>Contacts</p>
          </div>
          <div>
            {" "}
            <a href="tel:1234567890">XYZ , 1234567890</a>
          </div>
          <div>
            <a href="tel:9876543210">xyz , 9876543210</a>
          </div>
        </div>

        {/* Address */}
        <div className={styles.address}>
          <div className={styles.Cntct} style={{ textDecoration: "underline" }}>
            <p>Address</p>
          </div>
          <div>
            <a
              href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.789718,17z/data=!3m1!4b1!4m6!3m5!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929!16zL20vMDhfMWhk?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Silchar, Assam
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.socialmedia}>
          <div className={styles.Cntct} style={{ textDecoration: "underline" }}>
            <p>Social</p>
          </div>
          {/* <p>Instagram - @posua_insta</p> */}
          <div>
            <a
              href="https://www.instagram.com/posua_nits?igsh=MXR6a29raDJhaDFiaQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram{" "}
            </a>
          </div>
          {/* <p>Facebook - facebook.com/posua</p> */}
          <div>
            <a
              href="https://www.facebook.com/nitsposua?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook{" "}
            </a>
          </div>
        </div>

        {/* Mail */}
        <div className={styles.mail}>
          <div className={styles.Cntct} style={{ textDecoration: "underline" }}>
            <p>Mail</p>
          </div>
          <div>
            {" "}
            <a href="mailto:borhomthuri.posua@gmail.com">borhomthuri.posua@gmail.com</a>
          </div>
        </div>
      </div>

      {/* <img src='https://res.cloudinary.com/dclhahfvz/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710923131/footer_final_mj5rba.jpg?_s=public-apps' alt=''/> */}
    </footer>
  );
};
export default Footer;
