import React from "react";
import { Card } from "../../components/card/Card";
import subjects from "../../../hodiny.json"

export const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Probíhající hodiny</h1>
      <div className="card-container">
        {subjects.probihajiciHodiny.map((hour, index) => (
          <Card key={index} hour={hour} />
        ))}
      </div>
    </div>
  );
};
