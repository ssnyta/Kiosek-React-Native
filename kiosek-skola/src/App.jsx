import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./page/main/MainPage";
import { TeacherPage } from "./page/teacher/TeacherPage";
import { DetailTeacher } from "./page/detail/DetailPage";
import { AktualitaPage } from "./page/aktualita/Aktualita";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/teacher/detail" element={<DetailTeacher />} />
          <Route path="/aktuality" element={<AktualitaPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;