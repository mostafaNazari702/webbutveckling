import { Link } from "react-router-dom";
import "./Footer.css";

const linkGroups = [
  {
    title: "Lär dig",
    links: [
      { label: "Startsida", to: "/" },
      { label: "Lektion", to: "/lektion" },
      { label: "Projekt", to: "/projekt" }
    ]
  },
  {
    title: "Resurser",
    links: [
      { label: "Kontakt", to: "/contact" },
      { label: "Upphovsrätt", to: "/copyright" }
    ]
  },
  {
    title: "Externt",
    links: [
      { label: "react.dev", href: "https://react.dev" },
      { label: "MDN Web Docs", href: "https://developer.mozilla.org" },
      { label: "Vite", href: "https://vitejs.dev" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__contact">
            <h3 className="footer__heading">Kontakt</h3>
            <p className="footer__text">
              Har du frågor om kursen eller vill ge feedback? Skriv till mig
              direkt via kontaktformuläret.
            </p>
            <Link to="/contact" className="footer__mail">
              Gå till kontaktformuläret →
            </Link>
          </div>

          <div className="footer__links">
            {linkGroups.map((group) => (
              <div key={group.title} className="footer__group">
                <h4 className="footer__group-title">{group.title}</h4>
                <ul>
                  {group.links.map((link) =>
                    link.to ? (
                      <li key={link.label}>
                        <Link to={link.to} className="footer__link">
                          {link.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="footer__link"
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} Mostafa Nazari
          </span>
          <Link to="/copyright" className="footer__legal-link">
            Upphovsrätt
          </Link>
        </div>
      </div>
    </footer>
  );
}
