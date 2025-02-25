import React from "react";
import { Card } from "../../components/card/Card";
import subjects from "../../../hodiny.json";
import aktuality from "../../../aktualita.json";
import "../main/MainPage.css";
import { Nav } from "../../components/nav/Nav";

export const MainPage = () => {
  const nejnovejsiAktualita = aktuality.aktuality.sort((a, b) => new Date(b.datum) - new Date(a.datum))[0];

  return (
    <div className="main-page">
      <Nav />
      <h1>Probíhající hodiny: </h1>
      <div className="card-container">
        <Card hours={subjects.probihajiciHodiny} />
      </div>

      {nejnovejsiAktualita && (
        <div className="latest-news">
          <h2>Slyšte, slyšte...</h2>
          <div className="card card-news p-3">
            <div className="card-header">
              <h5 className="card-title">{nejnovejsiAktualita.nadpis}</h5>
              <span className="badge">{nejnovejsiAktualita.datum}</span>
            </div>
            <div className="card-body">
              <p><strong>Autor:</strong> {nejnovejsiAktualita.autor}</p>
              <p>{nejnovejsiAktualita.popis}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
