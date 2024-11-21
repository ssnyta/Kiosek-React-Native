import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./page/main/MainPage";
import teachers from "../teachers.json";
import subjects from "../hodiny.json";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
