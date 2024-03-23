import React from "react";
// import footer_final from "../../../assets/footer_final.png"; // Import the PNG background image
// import posua_logo from '../../../assets/posua_logo.png'; // Import the Posua logo image
import styles from "./Footer.module.scss";
import fontStyles from "./fontStyles.module.scss"; // Import font styles

const Footer = () => {
  return (
    <footer
      //     style={{
      //         backgroundColor:"beige",
      //       backgroundImage: 'url(https://res.cloudinary.com/dclhahfvz/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710923131/footer_final_mj5rba.jpg?_s=public-apps)',
      //       width: '100vw',
      //       height: '50vh',
      //       position: 'relative',
      //  //top: '100%',
      //     //   left: '457px',
      //       gap: '20px', // Add gap between containers
      //     //   opacity: '0px',
      //       textAlign: 'center', // Center align content
      //       display: 'flex', // Use flexbox layout
      //       justifyContent: 'center', // Center align items horizontally
      //       alignItems: 'center', // Center align items vertically

      //   }}
      className={`${styles.Container} ${fontStyles.PhilosopherFont}`}
    >
      <div className={styles.posua}>
        <img
          src="https://res.cloudinary.com/dclhahfvz/image/upload/v1710953023/New_Posua_logo_kyknan.png"
          alt="Posua Logo"
        />
      </div>
      <div
        className={styles.content}
        // style={{
        //     display:'flex',
        //     justifyContent:'space-evenly',
        //     alignItems:'center',
        //     width :"100%",
        //     fontFamily:'Roboto',
        //     fontWeight:'400',
        //     color:'#fff'

        // }}
      >
        <div className={styles.Contact}>
          <div className="Cntct" style={{ textDecoration: "underline" }}>
            Contacts
          </div>
          <div>
            {" "}
            <a href="tel:1234567890">XYZ , 1234567890</a>
          </div>
          <div>
            <a href="tel:9876543210">xyz , 9876543210</a>
          </div>
        </div>
        <div className={styles.address}>
          <div className="Add" style={{ textDecoration: "underline" }}>
            Address
          </div>
          <div>Silchar, Assam</div>
        </div>
        <div className={styles.socialmedia}>
          <div className="Soc" style={{ textDecoration: "underline" }}>
            Social
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
        <div className={styles.mail}>
          <div className="email" style={{ textDecoration: "underline" }}>
            Mail
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
