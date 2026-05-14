import { useEffect, useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ items, title = "Lektionsplan" }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="sidebar" aria-label="Lektionsnavigation">
      <div className="sidebar__brand">
        <span className="sidebar__logo">R</span>
        <span>React + Fetch</span>
      </div>
      <p className="sidebar__title">{title}</p>
      <nav>
        <ol className="sidebar__list">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  "sidebar__link" +
                  (active === item.id ? " sidebar__link--active" : "")
                }
              >
                <span className="sidebar__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
