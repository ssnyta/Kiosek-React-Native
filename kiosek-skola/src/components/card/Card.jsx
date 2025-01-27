import { useState, useEffect, useRef } from "react";
import "../card/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Card = ({ hours }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Aktivní slide
  const [isUserInteracting, setIsUserInteracting] = useState(false); // Flag pro interakci uživatele
  const autoSlideInterval = useRef(null); // Ref pro interval

  // Funkce pro přepnutí na další slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % hours.length);
  };

  // Funkce pro přepnutí na předchozí slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? hours.length - 1 : prevIndex - 1));
  };

  // Funkce pro restartování intervalu
  const restartAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current); // Vyčistit předchozí interval
    }
    // Nastavit nový interval pro automatické přepínání
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); // 5 sekund
  };

  // Funkce pro zastavení automatického přepínání při manuálním přepnutí
  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current); // Zastavit interval
    }
    setIsUserInteracting(true); // Nastavit flag, že uživatel interaguje
  };

  // Funkce pro ruční přepnutí na konkrétní slide (při kliknutí na indikátor)
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    stopAutoSlide(); // Zastavit interval při manuálním přepnutí
  };

  // Efekt pro správu automatického přepínání karet
  useEffect(() => {
    if (isUserInteracting) {
      return; // Pokud uživatel interaguje, automatické přepínání se nezapne
    }

    // Restartujeme interval, pokud není žádná interakce uživatele
    restartAutoSlide();

    // Vyčištění intervalů při unmountu nebo změně stavu
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [activeIndex, isUserInteracting]); // Závislost na změně activeIndex a isUserInteracting

  // Obnovení interakce po určité době (5 sekund)
  useEffect(() => {
    if (!isUserInteracting) return;

    const timer = setTimeout(() => {
      setIsUserInteracting(false); // Po 5 sekundách obnovíme interakci
    }, 5000);

    return () => clearTimeout(timer);
  }, [isUserInteracting]);

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
            onClick={() => handleIndicatorClick(index)} // Ruční přepnutí při kliknutí na indikátor
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : undefined}
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
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <div className="card card-carousel" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div className="card-body">
                  <h5 className="card-title">{nazev}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Třída: {trida}</h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Učitel: {vyucujiciUcitel}</h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Místnost: {mistnost}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => { prevSlide(); stopAutoSlide(); }} // Zastavit interval při manuálním přepnutí na předchozí slide
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => { nextSlide(); stopAutoSlide(); }} // Zastavit interval při manuálním přepnutí na další slide
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
