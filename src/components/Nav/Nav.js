import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavStyle.css";

export default function Nav() {
  const [burgerClass, setBurgerClass] = useState("burger-bar closed");
  const [menuClass, setMenuClass] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!menuOpen) {
      setBurgerClass("burger-bar open");
      setMenuClass("menu open");
    } else {
      setBurgerClass("burger-bar closed");
      setMenuClass("menu");
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <Link to="/" className="title">
          Matt Jordan's Piano Studio
        </Link>
        <div
          className="burger"
          onClick={() => {
            updateMenu();
          }}
        >
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
        <div className={menuClass}>
          <NavLink
            to="/"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            About Me
          </NavLink>
          <NavLink
            to="/studio"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            My Studio
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            Contact Me
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}
