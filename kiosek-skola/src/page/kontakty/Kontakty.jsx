import { useState } from "react";
import { Nav } from "../../components/nav/Nav";
import contacts from "../../../contact.json";
import "../kontakty/kontakty.css";

export const Kontakty = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sortedContacts = contacts.kontakty.sort((a, b) => a.oddeleni.localeCompare(b.oddeleni));

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="container mt-0"> {/* Ještě blíže k navbaru */}
        {sortedContacts.map((contact, index) => (
          <div
            key={index}
            className={`card contact-card mb-3 p-3 ${activeIndex === index ? "expanded" : ""}`}
          >
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title m-0">
                <button
                  className="btn btn-link d-flex align-items-center"
                  type="button"
                  onClick={() => handleToggle(index)}
                >
                  {contact.jmeno}
                  <span className="badge ms-2">{contact.oddeleni}</span>
                </button>
              </h5>
            </div>
            <div className={`collapse ${activeIndex === index ? "show" : ""}`}>
              <div className="card-body">
                <p><strong>Pozice:</strong> {contact.pozice}</p>
                <p><strong>📞 Telefon:</strong> {contact.telefon}</p>
                <p><strong>✉️ Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                <p><strong>🏢 Místnost:</strong> {contact.mistnost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};