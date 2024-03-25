import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Navbar.module.scss";
import "./fonts.scss";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  // const [eventsClicked, setEventsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

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
    // return undefined;
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);

    closeMenu();
    if (item === "Home") {
      navigate("/");
    } else if (item === "ArtistPage") {
      navigate("/artists");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
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
      className={`${styles.navbar} ${selectedItem === "Events" ? styles.eventsClicked : ""} absolute z-[20000]`}
    >
      <div className={styles.links}>
        {/* <Link to="/"> */}
        <NavItem
          text="Home"
          selected={selectedItem === "Home"}
          onClick={() => handleItemClick("Home")}
        />
        {/* </Link> */}
        {/* <Link to="/events"> */}
        <NavItem
          text="Events"
          selected={selectedItem === "Events"}
          onClick={() => handleItemClick("Events")}
          // path="/events"
        />
        {/* </Link> */}
        {/* <Link to="/gallery"> */}
        <NavItem
          text="Gallery"
          selected={selectedItem === "Gallery"}
          onClick={() => handleItemClick("Gallery")}
          // path="/gallery"
        />
        {/* </Link> */}
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
        {/* <Link to="/artists"> */}
        <NavItem
          text="ArtistPage"
          selected={selectedItem === "ArtistPage"}
          onClick={() => handleItemClick("ArtistPage")}
          // path="/artists"
          // eventsClicked={eventsClicked}
        />
        {/* </Link> */}
        {/* <Link to="/sponsors"> */}
        <NavItem
          text="Sponsors"
          selected={selectedItem === "Sponsors"}
          onClick={() => handleItemClick("Sponsors")}
          // path="/sponsors"
          // eventsClicked={eventsClicked}
        />
        {/* </Link> */}
        {/* <Link to="/team"> */}
        <NavItem
          text="Team"
          selected={selectedItem === "Team"}
          onClick={() => handleItemClick("Team")}
          // path="/team"
          // eventsClicked={eventsClicked}
        />
      </div>
      <div
        className={`${styles.hamburgerMenu} mr-[80vw] md:mr-0  transition-all duration-300 ease-in-out  ${isMenuOpen ? "opacity-0" : " opacity-100"}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {windowSize < 768 && (
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="sr-only">Home</span>
          <img
            src="https://res.cloudinary.com/dclhahfvz/image/upload/v1710960996/navbar_logo_xv78qn.png"
            alt=""
            style={{
              justifyContent: "center",
              alignItems: "start",
              position: "relative",
              top: "-10px",
              display: "flex",
            }}
          />
        </a>
      )}
      <div
        className={`${styles.mobileMenu} transition-all duration-500 ease-in-out  ${isMenuOpen ? styles.open : "translate-x-[-100%]"} `}
      >
        {/* <div className={styles.mobileLinks}> */}
        <div className={`${styles.mobileLinks} `}>
          {/* <div className=" mr-[80vw] text-[2rem] text-[#E27B4E] font-medium" onClick={closeMenu}>X</div> */}

          <div className="mr-[80vw] mt-[-2px]" onClick={closeMenu}>
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
            text="ArtistPage"
            selected={selectedItem === "ArtistPage"}
            onClick={() => handleItemClick("ArtistPage")}
          />
          <NavItem
            text="Sponsors"
            selected={selectedItem === "Sponsors"}
            onClick={() => handleItemClick("Sponsors")}
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
