import "./Card.css";

export default function Card({ icon, title, children, accent = "primary" }) {
  return (
    <article className={`card card--${accent}`}>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{children}</p>
    </article>
  );
}
