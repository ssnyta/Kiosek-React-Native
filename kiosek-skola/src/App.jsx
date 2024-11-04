import './App.css'
import { Router as BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './page/MainPage/MainPage.jsx';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/negr' element ={<MainPage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
