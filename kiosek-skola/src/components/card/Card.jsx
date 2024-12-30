import "../card/Card.css"
export const Card = ({ hour }) => {
  const { trida, nazev, vyucujiciUcitel, mistnost } = hour;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{nazev}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Třída: {trida}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Učitel: {vyucujiciUcitel}
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Místnost: {mistnost}
        </h6>
      </div>
    </div>
  );
};
