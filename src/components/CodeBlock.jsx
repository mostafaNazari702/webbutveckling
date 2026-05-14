import "./CodeBlock.css";

export default function CodeBlock({ language = "jsx", title, children }) {
  return (
    <figure className="code-block">
      <figcaption className="code-block__chrome">
        <span className="code-block__title">
          {title ?? `kod.${language}`}
        </span>
      </figcaption>
      <pre className="code-block__pre">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </figure>
  );
}
