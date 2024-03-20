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
      <div
        className={styles.main}
        // style={{
        //     display:'flex',
        //     flexDirection:'column',
        //     justifyContent:'center',
        //     alignItems:'center',
        //     height:'100%',
        //     width:'100%',
        //     gap : "5rem"
        // }}
      >
        <img
          src="https://res.cloudinary.com/dclhahfvz/image/upload/v1710953023/New_Posua_logo_kyknan.png"
          alt="Posua Logo"
        />
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
            <p>Contacts</p>
            <p>1234567890</p>
            <p>9876543210</p>
          </div>
          <div className={styles.address}>
            <p>Address</p>
            <p>Silchar, Assam</p>
          </div>
          <div className={styles.socialmedia}>
            <p>Social Media</p>
            {/* <p>Instagram - @posua_insta</p> */}
            <p>
              <a
                href="https://www.instagram.com/posua_nits?igsh=MXR6a29raDJhaDFiaQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram{" "}
              </a>
            </p>
            {/* <p>Facebook - facebook.com/posua</p> */}
            <p>
              <a
                href="https://www.facebook.com/nitsposua?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook{" "}
              </a>
            </p>
          </div>
          <div className={styles.mail}>
            <p>Mail</p>
            <p>borhomthuri.posua@gmail.com</p>
          </div>
        </div>

        {/* <img src='https://res.cloudinary.com/dclhahfvz/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710923131/footer_final_mj5rba.jpg?_s=public-apps' alt=''/> */}
      </div>
    </footer>
  );
};
export default Footer;
