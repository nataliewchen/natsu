import React, { useState, useEffect } from "react";
import serifLogo from "../assets/serif-logo.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useWidth } from "../utils/hooks";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useVelocity,
} from "framer-motion";

const verticalRotate = {
  initial: { rotate: 0, transition: { type: "tween" } },
  rotate: { rotate: -180, transition: { type: "tween" } },
};

const Links = ({ show }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className={`nav-links ${show ? "" : "hide"}`}>
      <NavLink to="">Home</NavLink>
      <div
        className="nav-link-dropdown"
        onMouseEnter={() => setOpenDropdown(true)}
        onMouseLeave={() => setOpenDropdown(false)}
      >
        <NavLink to="products">Products</NavLink>
        <motion.i
          variants={verticalRotate}
          animate={openDropdown ? "rotate" : "initial"}
          className="bi bi-chevron-down"
        />
        <div className={`nav-dropdown`}>
          <NavLink to="products/stickers">Stickers</NavLink>
          <NavLink to="products/plushies">Plushies</NavLink>
        </div>
      </div>
      <NavLink to="about">About</NavLink>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const width = useWidth();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(width < 900);

  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(true);

  const onLogoClick = () => {
    navigate("/");
  };

  const onNavIconClick = () => {
    setOpen(!open);
  };

  const onMobileChevronClick = () => {
    setOpenMobileDropdown(!openMobileDropdown);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    setMobileNav(width < 900);
    setOpen(width < 900 && open);
  }, [width]);

  useMotionValueEvent(scrollVelocity, "change", (latest) => {
    if (latest > 0) {
      // moving down, hide nav
      setShowOnScroll(false);
    } else if (latest < 0) {
      // moving up, show nav
      setShowOnScroll(true);
    }
  });

  // animations
  const verticalNavSlide = {
    show: { top: "0", transition: { duration: 0.5 } },
    hide: {
      top: "-150px",
      transition: { delay: 0.1, duration: 0.6 },
      transitionEnd: { display: "none" },
    },
  };

  const verticalMobileLinksSlide = {
    show: { top: "0" },
    hide: { top: "-100%", transitionEnd: { display: "none" } },
  };

  return (
    <motion.nav
      id="navbar"
      animate={showOnScroll ? "show" : "hide"}
      variants={verticalNavSlide}
    >
      <div className="menubar" style={{ boxShadow: open ? "none" : "" }}>
        <img
          className="logo hover-pointer"
          src={serifLogo}
          alt="logo"
          onClick={onLogoClick}
        />
        <div
          id="nav-icon"
          className={`${mobileNav ? (open ? "open" : "") : "hide"}`}
          onClick={onNavIconClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Links show={!mobileNav} />
        <motion.i className="bi bi-cart"></motion.i>
      </div>
      <motion.div
        className="mobile-nav-links"
        variants={verticalMobileLinksSlide}
        animate={open ? "show" : "hide"}
        transition={{ duration: 0.4 }}
      >
        <Links show={mobileNav} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
