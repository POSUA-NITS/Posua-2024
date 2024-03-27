import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import styles from "./Navbar.module.scss";
import "./fonts.scss";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [windowSize, setWindowSize] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial setup
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [isMenuOpen]);
  return (
    <div
      className={`${styles.navbar} ${
        isNavbarFixed ? styles.fixed : styles.relative
      } ${selectedItem === "Events" ? styles.eventsClicked : ""} absolute z-[20000]`}
    >
      <div className={styles.links}>
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
        <Link to="/">
          <img
            src={
              selectedItem === "Events"
                ? "https://res.cloudinary.com/dclhahfvz/image/upload/v1710922616/posua_logo_pscvmf.png"
                : "https://res.cloudinary.com/dclhahfvz/image/upload/v1710960996/navbar_logo_xv78qn.png"
            }
            alt="Logo"
            className={styles.logo}
            // className={${styles.logo} ${selectedItem === "Events" ? styles.logoWithBackground : ""}}
          />
        </Link>{" "}
        <NavItem
          text="Artists"
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
      <div
        className={`${styles.hamburgerMenu} mr-[80vw] md:mr-0  transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {windowSize < 768 && (
        // <a href="/" style={{ textDecoration: "none" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="sr-only">Home</span>
          <img
            src="https://res.cloudinary.com/dclhahfvz/image/upload/v1710960996/navbar_logo_xv78qn.png"
            alt=""
            style={{
              justifyContent: "center",
              alignItems: "start",
              position: "relative",
              top: "-9px",
              display: "flex",
            }}
          />
        </Link>

        // </a>
      )}

      <div
        className={`${styles.mobileMenu} transition-all duration-500 ease-in-out  ${isMenuOpen ? styles.open : `${styles.open} translate-x-[-100%]`} `}
      >
        <div className={`${styles.mobileLinks}   `}>
          {/* <div className=" mr-[80vw] text-[2rem] text-[#E27B4E] font-medium" onClick={closeMenu}>X</div> */}

          <div className="mr-[80vw] mt-[2px]" onClick={closeMenu}>
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
