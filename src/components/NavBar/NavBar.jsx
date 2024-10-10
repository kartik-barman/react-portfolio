import React, { useRef } from "react";
import "./NavBar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import menu_icon from "../../assets/menu_open.svg";
import menu_close_icon from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navBar">
      <div className="logo">
        <h3>Kartik</h3>
        <img src={theme_pattern} alt="" />
      </div>
      <img src={menu_icon} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close_icon}
          alt=""
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <AnchorLink href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#services">
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#work">
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default NavBar;
