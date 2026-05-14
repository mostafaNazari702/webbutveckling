import "./StepBlock.css";

export default function StepBlock({ number, title, children }) {
  return (
    <section className="step-block">
      <div className="step-block__number" aria-hidden="true">
        {number}
      </div>
      <div className="step-block__body">
        <h3 className="step-block__title">{title}</h3>
        <div className="step-block__text">{children}</div>
      </div>
    </section>
  );
}
