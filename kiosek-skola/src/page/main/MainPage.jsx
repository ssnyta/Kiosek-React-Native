import React from "react";
import { Card } from "../../components/card/Card";
import subjects from "../../../hodiny.json"
import "../main/MainPage.css"
import { Nav } from "../../components/nav/Nav";
export const MainPage = () => {
  return (
    <div className="main-page">
      <Nav/>
      <h1>Probíhající hodiny: </h1>
      <div className="card-container">
        {subjects.probihajiciHodiny.map((hour, index) => (
          <Card key={index} hour={hour} />
        ))}
      </div>
      
    </div>

    
  );
};
