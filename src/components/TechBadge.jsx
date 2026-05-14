import "./TechBadge.css";


export default function TechBadge({ label, tone = "primary" }) {
  return <span className={`tech-badge tech-badge--${tone}`}>{label}</span>;
}
