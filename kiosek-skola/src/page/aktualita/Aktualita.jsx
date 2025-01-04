import { Nav } from "../../components/nav/Nav";
import subjects from "../../../aktualita.json";
import "../../page/aktualita/Aktualita";

export const AktualitaPage = () => {
  const sortedSubjects = subjects.aktuality.sort((a, b) => new Date(b.datum) - new Date(a.datum));

  return (
    <>
      <Nav />
      <div className="container mt-4">
        {sortedSubjects.map((subject, index) => {
          const collapseId = `collapse-${index}`;
          return (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                <h5 className="m-0">
                  <button 
                    className="btn btn-link text-decoration-none d-flex align-items-center" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${collapseId}`} 
                    aria-expanded="false" 
                    aria-controls={collapseId}
                  >
                    {subject.nadpis} 
                    <span className="badge bg-primary ms-2">{subject.datum}</span>
                  </button>
                </h5>
              </div>
              <div id={collapseId} className="collapse">
                <div className="p-3 border rounded">
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
