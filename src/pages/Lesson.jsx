import Sidebar from "../components/Sidebar.jsx";
import StepBlock from "../components/StepBlock.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import Button from "../components/Button.jsx";
import Illustration from "../components/Illustration.jsx";
import "./Lesson.css";

const sections = [
  { id: "fetch", label: "Vad är Fetch API?" },
  { id: "first-request", label: "Din första request" },
  { id: "json", label: "Förstå JSON" },
  { id: "async-await", label: "Async och await" },
  { id: "display", label: "Visa hämtad data" },
  { id: "errors", label: "Felhantering" },
  { id: "components", label: "Komponentträd" }
];

export default function Lesson() {
  return (
    <div className="lesson container">
      <Sidebar items={sections} />

      <article className="lesson__content">
        <header className="lesson__hero">
          <span className="section-eyebrow">Lektion 01</span>
          <h1 className="lesson__title">Fetch &amp; API -- grunderna</h1>
          <p className="lesson__lead">
            I den här lektionen lär du dig hur man hämtar data från ett riktigt
            API med inbyggda <code>fetch()</code>, hur JSON-formatet funkar och
            hur du visar resultatet i en React-komponent.
          </p>
        </header>

        {}
        <StepBlock
          number="1"
          title="Vad är Fetch API?"
        >
          <p>
            <strong>Fetch API</strong> är ett inbyggt verktyg i webbläsaren som
            låter din JavaScript-kod prata med en server. Du skickar en
            förfrågan (en <em>request</em>) till en URL och får tillbaka ett
            svar (<em>response</em>) ofta i form av JSON-data.
          </p>
          <ul>
            <li>Kräver inga extra bibliotek och funkar i alla moderna webbläsare.</li>
            <li>Returnerar ett <strong>Promise</strong> som löser sig när svaret kommer.</li>
            <li>Används både för att <em>hämta</em> och <em>skicka</em> data.</li>
          </ul>
        </StepBlock>

        <div id="fetch" className="lesson__anchor" aria-hidden="true" />

        {}
        <StepBlock
          number="2"
          title="Din första request"
        >
          <p>
            Ett <code>fetch()</code>-anrop tar minst en parameter: URL:en till
            datan. Här hämtar vi en lista med inlägg från det öppna API:et
            JSONPlaceholder.
          </p>
        </StepBlock>

        <div id="first-request" className="lesson__anchor" aria-hidden="true" />

        <CodeBlock language="js" title="Javascript kod">{`fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("Hämtade", data.length, "inlägg");
  });`}</CodeBlock>

        {}
        <StepBlock number="3" title="Förstå JSON">
          <p>
            <strong>JSON</strong> (JavaScript Object Notation) är ett textformat
            som ser ut precis som JavaScript-objekt. Servern skickar text, och
            metoden <code>response.json()</code> tolkar texten till ett vanligt
            objekt eller en array som du kan använda direkt i React.
          </p>
        </StepBlock>

        <div id="json" className="lesson__anchor" aria-hidden="true" />

        <CodeBlock language="json" title="Json exempel">{`{
  "id": 1,
  "title": "Lär dig React",
  "completed": false,
  "tags": ["react", "fetch", "json"]
}`}</CodeBlock>

        <Illustration
          name="json"
          className="lesson__visual illustration--shadow"
          title="Visualisering av ett JSON-objekt"
        />

        {}
        <figure className="diagram">
          <figcaption className="diagram__title">Så flödar datan</figcaption>
          <Illustration
            name="fetchFlow"
            title="Bläddrare som anropar ett API via fetch"
          />
        </figure>

        {}
        <StepBlock number="4" title="Async och await">
          <p>
            Med <code>async</code> och <code>await</code> blir koden lättare att
            läsa. Du slipper kedjor av <code>.then()</code> och kan skriva
            anropen som om de vore vanliga, raka steg.
          </p>
        </StepBlock>

        <div id="async-await" className="lesson__anchor" aria-hidden="true" />

        <CodeBlock language="js" title="Javascript kod">{`async function hamtaInlagg() {
  const respons = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = await respons.json();
  return data;
}

hamtaInlagg().then((inlagg) => console.log(inlagg[0]));`}</CodeBlock>

        {}
        <StepBlock number="5" title="Visa hämtad data i React">
          <p>
            I React använder du <code>useEffect</code> för att starta anropet
            när komponenten laddas, och <code>useState</code> för att spara
            svaret. När state uppdateras renderas listan automatiskt.
          </p>
        </StepBlock>

        <div id="display" className="lesson__anchor" aria-hidden="true" />

        <CodeBlock language="jsx" title="JSX kod">{`import { useEffect, useState } from "react";

export default function Inlagg() {
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    async function ladda() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await res.json();
      setPoster(data);
    }
    ladda();
  }, []);

  return (
    <ul>
      {poster.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}`}</CodeBlock>

        {}
        <StepBlock number="6" title="Felhantering">
          <p>
            Nätverk är opålitliga. Bygg därför alltid in tre tillstånd i din
            komponent: <strong>laddar</strong>, <strong>fel</strong> och
            <strong> data</strong>. På så sätt vet användaren alltid vad som
            händer.
          </p>
        </StepBlock>

        <div id="errors" className="lesson__anchor" aria-hidden="true" />

        <CodeBlock language="jsx" title="JSX kod">{`const [data, setData] = useState(null);
const [fel, setFel] = useState(null);
const [laddar, setLaddar] = useState(true);

useEffect(() => {
  async function ladda() {
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Servern svarade " + res.status);
      setData(await res.json());
    } catch (err) {
      setFel(err.message);
    } finally {
      setLaddar(false);
    }
  }
  ladda();
}, []);`}</CodeBlock>

        {}
        <StepBlock number="7" title="bonus: tänk i komponenter">
          <p>
            En React-app är ett träd av komponenter. När du delar upp UI:t i
            mindre delar blir varje komponent enkel att fatta, testa och
            återanvända. Försök att alltid låta varje komponent göra
            <strong> en sak</strong>.
          </p>
        </StepBlock>

        <div id="components" className="lesson__anchor" aria-hidden="true" />

        <Illustration
          name="componentTree"
          className="lesson__visual illustration--bordered"
          title="Komponentträd med App, Header, Lista, Footer"
        />

        <div className="lesson__cta">
          <p>Redo att bygga något själv?</p>
          <Button as="a" href="/projekt" variant="primary">
            Gå till projektet
          </Button>
        </div>
      </article>

      <aside className="lesson__rightbar" aria-label="Tips och övningar">
        <div className="tip-box tip-box--amber">
          <h3>Tips</h3>
          <p>
            Glöm inte <code>await response.json()</code> utan det får du
            tillbaka ett Response-objekt och inte själva datan.
          </p>
          <p>
            Logga alltid <code>response.status</code> medan du felsöker. 200
            betyder OK, 404 betyder att resursen inte finns.
          </p>
        </div>

        <div className="tip-box tip-box--teal">
          <h3>Övning 1 - Hämta en användare</h3>
          <ol>
            <li>Hämta en användare från <code>/users/1</code>.</li>
            <li>Visa namn och e-post i en lista.</li>
            <li>Lägg till en knapp som hämtar nästa användare.</li>
          </ol>
        </div>

        <div className="tip-box tip-box--violet">
          <h3>Övning 2 - Sökbar lista</h3>
          <ol>
            <li>Bygg en sökruta som filtrerar inläggens titel.</li>
            <li>Använd en <code>useState</code> för sökordet.</li>
            <li>Filtrera arrayen innan du renderar listan.</li>
          </ol>
        </div>

        <div className="tip-box tip-box--rose">
          <h3>Övning 3 - Felscenario</h3>
          <ol>
            <li>Skriv en URL som inte finns och se vad som händer.</li>
            <li>Visa ett snyggt felmeddelande i UI:t.</li>
            <li>Lägg till en "Försök igen"-knapp.</li>
          </ol>
        </div>
      </aside>
    </div>
  );
}
