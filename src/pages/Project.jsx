import { useState } from "react";
import Button from "../components/Button.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Illustration from "../components/Illustration.jsx";
import "./Project.css";

const components = [
  {
    icon: "🧭",
    title: "Header-komponent",
    accent: "primary",
    text: "Visar appens namn och en sökruta där användaren skriver in en stad."
  },
  {
    icon: "📋",
    title: "Datalist-komponent",
    accent: "teal",
    text: "Tar emot väderdata som props och visar temperatur, känns-som och beskrivning."
  },
  {
    icon: "🔘",
    title: "Knapp-komponent",
    accent: "amber",
    text: "Återanvändbar knapp med primär stil, hover och laddningsläge."
  }
];


function wmoToSwedish(code) {
  if (code === 0) return "Klart";
  if (code <= 2) return "Lätt molnigt";
  if (code === 3) return "Mulet";
  if (code <= 49) return "Dimma";
  if (code <= 59) return "Duggregn";
  if (code <= 69) return "Regn";
  if (code <= 79) return "Snö";
  if (code <= 84) return "Regnskurar";
  if (code <= 99) return "Åskväder";
  return "Okänt";
}

function VaderMockup() {
  const [stad, setStad] = useState("Stockholm");
  const [resultat, setResultat] = useState({
    stad: "Stockholm",
    temperatur: null,
    kanslosom: null,
    beskrivning: "Sök en stad för att se vädret",
    vindstyrka: null,
    luftfuktighet: null,
    soluppgang: null,
  });
  const [laddar, setLaddar] = useState(false);
  const [fel, setFel] = useState(null);

  async function hamta(event) {
    event.preventDefault();
    if (!stad.trim()) return;
    setLaddar(true);
    setFel(null);
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(stad.trim())}&count=1&language=sv&format=json`
      );
      const geoData = await geoRes.json();
      if (!geoData.results?.length) throw new Error("Staden hittades inte");
      const { latitude, longitude, name } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature,relativehumidity_2m&daily=sunrise&timezone=auto&forecast_days=1`
      );
      if (!weatherRes.ok) throw new Error("Kunde inte hämta väderdata");
      const w = await weatherRes.json();
      const cw = w.current_weather;
      const hourIndex = w.hourly.time.indexOf(cw.time);
      const feelsLike = hourIndex >= 0 ? Math.round(w.hourly.apparent_temperature[hourIndex]) : null;
      const humidity = hourIndex >= 0 ? w.hourly.relativehumidity_2m[hourIndex] : null;
      const sunrise = w.daily?.sunrise?.[0] ? w.daily.sunrise[0].slice(11, 16) : null;

      setResultat({
        stad: name,
        temperatur: Math.round(cw.temperature),
        kanslosom: feelsLike,
        beskrivning: wmoToSwedish(cw.weathercode),
        vindstyrka: Math.round(cw.windspeed),
        luftfuktighet: humidity,
        soluppgang: sunrise,
      });
    } catch (err) {
      setFel(err.message);
    } finally {
      setLaddar(false);
    }
  }

  return (
    <div className="mockup">
      <header className="mockup__header">
        <div className="mockup__brand">
          <strong>Vädret nu</strong>
        </div>
        <form className="mockup__search" onSubmit={hamta}>
          <input
            type="text"
            value={stad}
            onChange={(event) => setStad(event.target.value)}
            placeholder="Sök stad…"
            aria-label="Sök stad"
          />
          <Button type="submit" variant="primary">
            {laddar ? "Hämtar…" : "Sök"}
          </Button>
        </form>
      </header>

      <div className="mockup__body">
        <aside className="mockup__panel">
          <h4>Senaste sökningar</h4>
          <ul>
            <li>Stockholm</li>
            <li>Göteborg</li>
            <li>Umeå</li>
            <li>Malmö</li>
          </ul>
        </aside>

        <section className="mockup__list" aria-live="polite">
          {fel && <p className="mockup__error">{fel}</p>}
          <article className="mockup__card mockup__card--primary">
            <h4>{resultat.stad}</h4>
            <p className="mockup__temp">
              {resultat.temperatur != null ? `${resultat.temperatur}°C` : "–"}
            </p>
            <p className="mockup__sub">{resultat.beskrivning}</p>
          </article>
          <article className="mockup__card">
            <h4>Känns som</h4>
            <p className="mockup__temp">
              {resultat.kanslosom != null ? `${resultat.kanslosom}°C` : "–"}
            </p>
            <p className="mockup__sub">
              {resultat.vindstyrka != null ? `Vind ${resultat.vindstyrka} m/s` : "Vind –"}
            </p>
          </article>
          <article className="mockup__card">
            <h4>Luftfuktighet</h4>
            <p className="mockup__temp">
              {resultat.luftfuktighet != null ? `${resultat.luftfuktighet}%` : "–"}
            </p>
            <p className="mockup__sub">
              {resultat.soluppgang ? `Soluppgång ${resultat.soluppgang}` : "Soluppgång –"}
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <>
      {}
      <section className="project-title">
        <div className="container project-title__inner">
          <span className="section-eyebrow">Slutprojekt</span>
          <h1 className="project-title__heading">
            Bygg din första väderapp med React &amp; Fetch
          </h1>
          <p className="project-title__lead">
            En guidad miniövning där du kombinerar allt från lektionen
            komponenter, state, props och Fetch API till en liten app som
            söker väder för valfri stad.
          </p>
        </div>
      </section>

      {}
      <section className="section section--surface">
        <div className="container project-overview">
          <div className="content-card">
            <h2 className="content-card__title">Översikt</h2>
            <p>
              Appen består av tre huvudkomponenter: en <strong>header</strong>{" "}
              med sökfält, en <strong>resultatlista</strong> med kort, samt en
              <strong> knapp</strong> som hämtar ny data. Datan kommer från ett
              gratis väder-API som returnerar JSON.
            </p>
            <ul className="content-card__list">
              <li>- Söker väder för en stad du själv väljer</li>
              <li>- Visar temperatur och beskrivning</li>
              <li>- Hanterar både laddning och fel</li>
              <li>- Bygger på återanvändbara React-komponenter</li>
            </ul>
          </div>
          <Illustration
            name="weather"
            className="content-image illustration--shadow"
            title="Illustration av en väderapp med sol och moln"
          />
        </div>
      </section>

      {}
      <section className="section section--soft">
        <div className="container">
          <header className="section-header">
            <span className="section-eyebrow">Förhandsgranskning</span>
            <h2 className="section-title">Så här kan resultatet se ut</h2>
            <p className="section-lead">
              Tryck på "Sök" för att
              simulera ett API-anrop och se hur ditt UI uppdateras när nytt
              state kommer in.
            </p>
          </header>

          <VaderMockup />
        </div>
      </section>

      {}
      <section className="section section--surface">
        <div className="container">
          <header className="section-header">
            <span className="section-eyebrow">Arkitektur</span>
            <h2 className="section-title">Komponentnedbrytning</h2>
            <p className="section-lead">
              Dela upp UI:t i små komponenter med tydligt ansvar. Det gör appen
              enklare att läsa, testa och förändra.
            </p>
          </header>

          <div className="component-grid">
            {components.map((c) => (
              <article
                key={c.title}
                className={`component-card component-card--${c.accent}`}
              >
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>

          <CodeBlock language="jsx" title="App.jsx">{`import { useState } from "react";
import Header from "./components/Header";
import VaderLista from "./components/VaderLista";

export default function App() {
  const [vader, setVader] = useState(null);
  const [laddar, setLaddar] = useState(false);
  const [fel, setFel] = useState(null);

  async function hamtaVader(stad) {
    try {
      setLaddar(true);
      setFel(null);
      const res = await fetch(
        \`https://api.open-meteo.com/v1/forecast?city=\${stad}\`
      );
      if (!res.ok) throw new Error("Kunde inte hämta väder");
      const data = await res.json();
      setVader(data);
    } catch (err) {
      setFel(err.message);
    } finally {
      setLaddar(false);
    }
  }

  return (
    <div className="app">
      <Header onSearch={hamtaVader} />
      {laddar && <p>Laddar…</p>}
      {fel && <p className="error">{fel}</p>}
      {vader && <VaderLista data={vader} />}
    </div>
  );
}`}</CodeBlock>
        </div>
      </section>

      {}
      <section className="section">
        <div className="container">
          <div className="exercise">
            <div className="exercise__text">
              <h2>Bygg själv</h2>
              <p>
                Klona projektet, byt ut det simulerade anropet mot ett riktigt
                API och lägg till funktionalitet för att spara senaste sökningar
                i <code>localStorage</code>. Bonus: visa en ikon för respektive
                väderlek.
              </p>
              <ul>
                <li>Steg 1: Skapa komponenterna Header, VaderKort och Lista</li>
                <li>Steg 2: Använd <code>useState</code> för stad och resultat</li>
                <li>Steg 3: Hämta data med <code>fetch()</code> i en async-funktion</li>
                <li>Steg 4: Hantera laddning och fel snyggt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
