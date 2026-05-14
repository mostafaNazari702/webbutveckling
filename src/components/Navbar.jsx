import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button.jsx";
import "./Navbar.css";

const links = [
  { to: "/", label: "Hem", end: true },
  { to: "/lektion", label: "Lektion" },
  { to: "/projekt", label: "Projekt" },
  { to: "/contact", label: "Kontakt" },
  { to: "/copyright", label: "Upphovsrätt" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark">
            <img src="/favicon.svg" alt="" width="46" height="46" />
          </span>
          <span className="navbar__logo-text">React + Fetch</span>
        </Link>

        <nav
          className={`navbar__menu ${open ? "navbar__menu--open" : ""}`}
          aria-label="Huvudmeny"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button as={Link} to="/projekt" variant="primary">
            Starta projekt
          </Button>
        </div>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label="Öppna meny"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
