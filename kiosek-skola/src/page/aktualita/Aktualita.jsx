import { Nav } from "../../components/nav/Nav";
import subjects from "../../../aktualita.json";
import "../aktualita/aktualita.css";

export const AktualitaPage = () => {
  const sortedSubjects = subjects.aktuality.sort((a, b) => new Date(b.datum) - new Date(a.datum));

  return (
    <>
      <Nav />
      <div className="container mt-4">
        {sortedSubjects.map((subject, index) => {
          const collapseId = `collapse-aktualita-${index}`;
          return (
            <div key={index} className="card card-news mb-3 p-3">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title m-0">
                  <button
                    className="btn btn-link d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="false"
                    aria-controls={collapseId}
                  >
                    {subject.nadpis}
                    <span className="badge ms-2">{subject.datum}</span>
                  </button>
                </h5>
              </div>
              <div id={collapseId} className="collapse">
                <div className="card-body">
                  <p><strong>Autor:</strong> {subject.autor}</p>
                  <p>{subject.popis}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
