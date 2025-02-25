import { useState } from "react";
import { Nav } from "../../components/nav/Nav";
import subjects from "../../../aktualita.json";
import "../aktualita/aktualita.css";

export const AktualitaPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sortedSubjects = subjects.aktuality.sort((a, b) => new Date(b.datum) - new Date(a.datum));

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="container mt-2">
        {sortedSubjects.map((subject, index) => (
          <div
            key={index}
            className={`card card-news mb-3 p-3 ${activeIndex === index ? "expanded" : ""}`}
          >
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title m-0">
                <button
                  className="btn btn-link d-flex align-items-center"
                  type="button"
                  onClick={() => handleToggle(index)}
                >
                  {subject.nadpis}
                  <span className="badge ms-2">{subject.datum}</span>
                </button>
              </h5>
            </div>
            <div className={`collapse ${activeIndex === index ? "show" : ""}`}>
              <div className="card-body">
                <p><strong>Autor:</strong> {subject.autor}</p>
                <p>{subject.popis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};