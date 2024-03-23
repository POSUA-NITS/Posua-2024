import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import "./fonts.scss";
const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  // const [eventsClicked, setEventsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleSize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleSize);
      handleSize();

      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
    return () => {};
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // if (item === "Events") {
    // setEventsClicked(true);
    // } else {
    // setEventsClicked(false);
    // }
    closeMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // <div className={styles.navbar}>
    <div
      className={`${styles.navbar} ${selectedItem === "Events" ? styles.eventsClicked : ""}`}
    >
      <div className={styles.links}>
        <NavItem
          text="Home"
          selected={selectedItem === "Home"}
          onClick={() => handleItemClick("Home")}
          // eventsClicked={eventsClicked}
        />
        <NavItem
          text="Events"
          selected={selectedItem === "Events"}
          onClick={() => handleItemClick("Events")}
          // eventsClicked={eventsClicked}
        />
        <NavItem
          text="Gallery"
          selected={selectedItem === "Gallery"}
          onClick={() => handleItemClick("Gallery")}
          // eventsClicked={eventsClicked}
        />
        <img
          src={
            selectedItem === "Events"
              ? "https://res.cloudinary.com/dclhahfvz/image/upload/v1710922616/posua_logo_pscvmf.png"
              : "https://res.cloudinary.com/dclhahfvz/image/upload/v1710960996/navbar_logo_xv78qn.png"
          }
          alt="Logo"
          className={styles.logo}
          // className={`${styles.logo} ${selectedItem === "Events" ? styles.logoWithBackground : ""}`}
        />{" "}
        {/* Logo */}
        {/* <div className={styles.separator}></div> */}
        <NavItem
          text="Artists"
          selected={selectedItem === "Artists"}
          onClick={() => handleItemClick("Artists")}
          // eventsClicked={eventsClicked}
        />
        <NavItem
          text="Sponsor"
          selected={selectedItem === "Sponsor"}
          onClick={() => handleItemClick("Sponsor")}
          // eventsClicked={eventsClicked}
        />
        <NavItem
          text="Team"
          selected={selectedItem === "Team"}
          onClick={() => handleItemClick("Team")}
          // eventsClicked={eventsClicked}
        />
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div
          className={`${styles.hamburgerMenu} mr-[80vw] md:mr-0  `}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        {windowSize < 768 && (
          <img
            src="https://res.cloudinary.com/dclhahfvz/image/upload/v1710960996/navbar_logo_xv78qn.png"
            alt=""
            style={{
              justifyContent: "center",
              alignItems: "start",
              position: "relative",
              top: "-45px",
              display: "flex",
            }}
          />
        )}
        <div className={styles.mobileLinks}>
          {/* <div className=" mr-[80vw] text-[2rem] text-[#E27B4E] font-medium" onClick={closeMenu}>X</div> */}
          <div className="mr-[80vw] mt-[-10px]" onClick={closeMenu}>
            <img
              src="https://res.cloudinary.com/dclhahfvz/image/upload/v1711130341/orangeCross_tqxpal.png"
              alt="Close Menu"
              className="w-[30px] h-[25px] font-bold"
              style={{ filter: "brightness(95%)" }}
            />
          </div>

          <NavItem
            text="Home"
            selected={selectedItem === "Home"}
            onClick={() => handleItemClick("Home")}
          />
          <NavItem
            text="Events"
            selected={selectedItem === "Events"}
            onClick={() => handleItemClick("Events")}
          />
          <NavItem
            text="Gallery"
            selected={selectedItem === "Gallery"}
            onClick={() => handleItemClick("Gallery")}
          />
          <NavItem
            text="Artists"
            selected={selectedItem === "Artists"}
            onClick={() => handleItemClick("Artists")}
          />
          <NavItem
            text="Sponsor"
            selected={selectedItem === "Sponsor"}
            onClick={() => handleItemClick("Sponsor")}
          />
          <NavItem
            text="Team"
            selected={selectedItem === "Team"}
            onClick={() => handleItemClick("Team")}
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ text, selected, onClick }) => {
  return (
    <div
      className={`${styles.navItem} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Navbar;
