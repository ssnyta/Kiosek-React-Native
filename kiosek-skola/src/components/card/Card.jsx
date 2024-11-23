export const Card = ({ hour }) => {
  const { trida, nazev, vyucujiciUcitel } = hour;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{nazev}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Třída: {trida}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Učitel: {vyucujiciUcitel}
        </h6>
      </div>
    </div>
  );
};
