import { useState, useEffect, useRef } from "react";
import "../card/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Card = ({ hours }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const autoSlideInterval = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % hours.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? hours.length - 1 : prevIndex - 1));
  };

  const restartAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    setIsUserInteracting(true);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    stopAutoSlide();
  };

  useEffect(() => {
    if (isUserInteracting) return;
    restartAutoSlide();
    return () => {
      if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    };
  }, [activeIndex, isUserInteracting]);

  useEffect(() => {
    if (!isUserInteracting) return;
    const timer = setTimeout(() => {
      setIsUserInteracting(false);
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
            onClick={() => handleIndicatorClick(index)}
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
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <div className="card card-carousel">
                <div className="card-body">
                  <h5 className="card-title">{nazev}</h5>
                  <h6 className="card-subtitle">Třída: {trida}</h6>
                  <h6 className="card-subtitle">Učitel: {vyucujiciUcitel}</h6>
                  <h6 className="card-subtitle">Místnost: {mistnost}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="carousel-control-prev" type="button" onClick={() => { prevSlide(); stopAutoSlide(); }}>
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" onClick={() => { nextSlide(); stopAutoSlide(); }}>
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};
