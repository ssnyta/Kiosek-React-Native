import React from "react";
import { Card } from "../../components/card/Card";
import { SearchBar } from "../../components/searchBar/searchBar";
import subjects from "../../../hodiny.json"
import "../main/MainPage.css"

export const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Probíhající hodiny: </h1>
      <div className="card-container">
        {subjects.probihajiciHodiny.map((hour, index) => (
          <Card key={index} hour={hour} />
        ))}
      </div>
      <SearchBar/>
    </div>

    
  );
};
