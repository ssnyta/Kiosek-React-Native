import { Nav } from "../../components/nav/Nav";
import contacts from "../../../contact.json";

export const Kontakty = () => {
  const sortedContacts = contacts.kontakty.sort((a, b) => a.oddeleni.localeCompare(b.oddeleni));

  return (
    <>
      <Nav />
      <div className="container mt-4">
        {sortedContacts.map((contact, index) => {
          const collapseId = `collapse-kontakt-${index}`;
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
                    {contact.jmeno} 
                    <span className="badge bg-secondary ms-2">{contact.oddeleni}</span>
                  </button>
                </h5>
              </div>
              <div id={collapseId} className="collapse">
                <div className="p-3 border rounded">
                  <p><strong>Pozice:</strong> {contact.pozice}</p>
                  <p><strong>Telefon:</strong> {contact.telefon}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                  <p><strong>Místnost:</strong> {contact.mistnost}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
