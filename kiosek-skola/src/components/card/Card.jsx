import "../card/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Card = ({ hours }) => {
  if (!Array.isArray(hours)) {
    console.error("Prop 'hours' is not an array or is undefined.");
    return <div>Error: Invalid data passed to the carousel.</div>;
  }

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {hours.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {hours.map((hour, index) => {
          const { trida, nazev, vyucujiciUcitel, mistnost } = hour;
          return (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="card card-carousel">
                <div className="card-body">
                  <h5 className="card-title">{nazev}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Třída: {trida}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Učitel: {vyucujiciUcitel}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Místnost: {mistnost}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
