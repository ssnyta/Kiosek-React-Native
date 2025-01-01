import { Nav } from "../../components/nav/Nav";
import subjects from "../../../aktualita.json";

export const AktualitaPage = () => {
  const sortedSubjects = subjects.aktuality.sort((a, b) => new Date(b.datum) - new Date(a.datum));

  return (
    <>
      <Nav />
      <div className="container mt-4">
        {sortedSubjects.map((subject, index) => {
          const collapseId = `collapse-${index}`;
          return (
            <div key={index} className="card mb-3">
              <div className="card-header">
                <h5 className="mb-0">
                  <button 
                    className="btn btn-link" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${collapseId}`} 
                    aria-expanded="false" 
                    aria-controls={collapseId}
                  >
                    {subject.nadpis} – {subject.datum}
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
