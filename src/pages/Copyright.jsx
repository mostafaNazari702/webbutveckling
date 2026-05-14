import Illustration from "../components/Illustration.jsx";
import "./Copyright.css";

const sections = [
  {
    icon: "✍️",
    title: "Eget material",
    accent: "primary",
    body: (
      <>
        <p>
          All text, alla illustrationer, all kod och hela designsystemet på den
          här webbplatsen är skapade av mig som ett skolprojekt. Materialet får användas fritt i
          undervisnings syfte men inte säljas vidare utan tillstånd eller att jag swishas delar av vinsten.
        </p>
      </>
    )
  },
  {
    icon: "🎓",
    title: "Användning i undervisning",
    accent: "teal",
    body: (
      <p>
        Andra får visa, kopiera och bygga vidare på denna koden så
        länge jag anges, det vill säga källan. Om du återanvänder en lektion i ett eget
        projekt – länka gärna tillbaka till min github och nämn att den
        ursprungligen togs fram som ett skolarbete.
      </p>
    )
  },
  {
    icon: "🖼️",
    title: "Bilder och illustrationer",
    accent: "amber",
    body: (
      <>
        <p>
          Alla illustrationer på sidan är ritade som inbäddade SVG-grafiker
          direkt i komponenten <code>Illustration.jsx</code>. Inga externa
          bildbanker används i körtid, vilket befriar mig från oavsiktlig överträdelser
          som kunnat brytas av misstag.
        </p>
        <p>
          Om du vill skapa egna illustrationer rekommenderar jag tjänster med
          tillåtande licenser, här är till exempel <a href="https://undraw.co" target="_blank" rel="noreferrer">unDraw</a> eller{" "}
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>.
        </p>
      </>
    )
  },
  {
    icon: "🌐",
    title: "API:er som används",
    accent: "violet",
    body: (
      <>
        <p>
          Lektionsexemplen anropar två publika API:er:
        </p>
        <ul>
          <li>
            <strong>JSONPlaceholder</strong> – ett gratis, öppet test-API som
            får användas i undervisning utan API-nyckel.
          </li>
          <li>
            <strong>Open-Meteo</strong> – ett gratis väder API för icke-
            kommersiellt bruk perfekt för mitt syfte.
          </li>
        </ul>
        <p>
          Båda tjänsterna nämns i koden och uppfyller sina respektive
          användar villkor.
        </p>
      </>
    )
  },
  {
    icon: "📚",
    title: "Externa resurser och inspiration",
    accent: "rose",
    body: (
      <>
        <p>
          Lektionsmaterialet är inspirerat av officiel dokumentation från
          React, MDN Web Docs och Vite. Citat och kodfragment från dessa
          källor är omskrivna med mina egna ord.
        </p>
        <ul>
          <li><a href="https://react.dev" target="_blank" rel="noreferrer">react.dev</a> – officiel React-dokumentation</li>
          <li><a href="https://developer.mozilla.org" target="_blank" rel="noreferrer">MDN Web Docs</a> – referens för Fetch och JavaScript</li>
          <li><a href="https://vitejs.dev" target="_blank" rel="noreferrer">vitejs.dev</a> – dokumentation för byggverktyget Vite</li>
        </ul>
      </>
    )
  },
  {
    icon: "🏫",
    title: "Skolprojekt",
    accent: "primary",
    body: (
      <p>
        Webbplatsen är skapad som inlämningsuppgift i kursen Webbutveckling av min lärare.
      </p>
    )
  }
];

export default function Copyright() {
  return (
    <>
      {/* Reminder till mig själv: bygg vidare på denna sida med fler sektioner om upphovsrätt, licenser och källor för högre betyg */}
      <section className="copyright-hero">
        <div className="container copyright-hero__inner">
          <div className="copyright-hero__text">
            <span className="section-eyebrow">Upphovsrätt</span>
            <h1 className="copyright-hero__title">
              Copyright &amp; användning
            </h1>
            <p className="copyright-hero__lead">
              Här hittar du villkoren för hur material från denna
              webbplatsen får användas. Sidan är skriven så att alla snabbt ska förstå vad som gäller.
            </p>
          </div>
          <Illustration
            name="copyrightShield"
            className="copyright-hero__art"
            title="Sköld med copyright symbol"
          />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container copyright-grid">
          {sections.map((section) => (
            <article
              key={section.title}
              className={`copyright-card copyright-card--${section.accent}`}
            >
              <div className="copyright-card__icon">{section.icon}</div>
              <h2 className="copyright-card__title">{section.title}</h2>
              <div className="copyright-card__body">{section.body}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container copyright-summary">
          <h2>Kort sammanfattning</h2>
          <ul>
            <li>Du får läsa, dela och använda materialet i undervisning.</li>
            <li>Du får bygga vidare på koden i egna skolprojekt.</li>
            <li>Du ska ange källan när du återanvänder något.</li>
            <li>Du får inte sälja eller använda materialet kommersielt.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
