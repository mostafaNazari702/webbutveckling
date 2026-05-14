import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import TechBadge from "../components/TechBadge.jsx";
import Illustration from "../components/Illustration.jsx";
import "./Home.css";

const learning = [
  {
    icon: "⚛️",
    title: "React-grunder",
    accent: "primary",
    text: "Lär dig hur React bygger upp gränssnittet med ett komponentträd och varför det är så populärt 2026."
  },
  {
    icon: "🧩",
    title: "Komponenter & JSX",
    accent: "violet",
    text: "Skapa återanvändbara komponenter med JSX Reacts sätt att skriva HTML direkt i JavaScript."
  },
  {
    icon: "🎒",
    title: "Props & State",
    accent: "teal",
    text: "Skicka data mellan komponenter med props och håll koll på dynamiska värden med useState."
  },
  {
    icon: "🌐",
    title: "Fetch API",
    accent: "amber",
    text: "Hämta data från ett riktigt API med fetch(), async/await och visa svaret i din React-app."
  },
  {
    icon: "🧠",
    title: "JSON & felhantering",
    accent: "rose",
    text: "Förstå JSON-formatet och bygg ett gränssnitt som tål långsamma nätverk och fel på ett snyggt sätt."
  }
];

const techRow1 = [
  { label: "React", tone: "primary" },
  { label: "JavaScript", tone: "amber" },
  { label: "JSX", tone: "violet" },
  { label: "Vite", tone: "teal" }
];

const techRow2 = [
  { label: "Fetch API", tone: "primary" },
  { label: "JSON", tone: "rose" },
  { label: "useState", tone: "teal" },
  { label: "useEffect", tone: "violet" }
];

export default function Home() {
  return (
    <>
      
      <section className="hero">
        <div className="container hero__inner">
          <span className="section-eyebrow">React och Fetch</span>
          <h1 className="hero__title">
            Lär dig <span className="hero__title-accent">React</span> och{" "}
            <span className="hero__title-accent">Fetch API</span> från noll till
            din första app
          </h1>
          <p className="hero__lead">
            En modern nybörjarguide på svenska som tar dig genom komponenter,
            state, props och hur du hämtar riktig data från ett API steg för
            steg.
          </p>
          <div className="hero__actions">
            <Button as={Link} to="/lektion" variant="primary">
              Starta lektionen
            </Button>
            <Button as={Link} to="/projekt" variant="secondary">
              Se projektet
            </Button>
          </div>

          <div className="hero__rail" aria-hidden="true">
            <div className="hero__tile hero__tile--primary">Komponent</div>
            <div className="hero__tile hero__tile--teal">Props</div>
            <div className="hero__tile hero__tile--amber">Fetch</div>
            <div className="hero__tile hero__tile--rose">JSON</div>
          </div>

          <Illustration
            name="hero"
            className="hero__art illustration--shadow"
            title="Illustration av en utvecklare framför en kodskarm"
          />
        </div>
      </section>

      {}
      <section className="section section--surface">
        <div className="container">
          <header className="section-header">
            <span className="section-eyebrow">Lärandemål</span>
            <h2 className="section-title">Det här kommer du lära dig</h2>
            <p className="section-lead">
              Kursen är uppdelad i fem tydliga byggstenar. Tillsammans ger de
              dig allt du behöver för att förstå och bygga moderna React-appar
              som pratar med ett API.
            </p>
          </header>

          <div className="learning-grid">
            {learning.map((item) => (
              <Card
                key={item.title}
                icon={item.icon}
                title={item.title}
                accent={item.accent}
              >
                {item.text}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="section section--soft">
        <div className="container">
          <header className="section-header">
            <span className="section-eyebrow">Teknologier</span>
            <h2 className="section-title">Det vi använder i kursen</h2>
            <p className="section-lead">
              Vi håller verktygslådan liten med fokus på modern React,
              JavaScript och webbplattformens inbyggda Fetch API.
            </p>
          </header>

          <div className="tech-grid">
            <div className="tech-grid__row">
              {techRow1.map((badge) => (
                <TechBadge key={badge.label} {...badge} />
              ))}
            </div>
            <div className="tech-grid__row">
              {techRow2.map((badge) => (
                <TechBadge key={badge.label} {...badge} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
