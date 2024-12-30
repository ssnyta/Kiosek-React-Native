import React from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "../../components/nav/Nav";
import "../detail/DetailPage.css";

export const DetailTeacher = () => {
  const location = useLocation();
  const teacher = location.state?.teacher;

  if (!teacher) {
    return <div>Učitel nenalezen</div>;
  }

  return (
    <>
      <Nav />
      <div className="teacher-detail">
        <div className="card">
          <div className="card-body">
            <div className="icons">
              <a href="/teacher"><img src="../../src/assets/icons/back.png" alt="back_arrow"/></a> 
              <img
                src="../../src/assets/userpicture.png"
                alt="teacher_picture"
              />
              <a href="/"><img src="../../src/assets/icons/home.png" alt="home" /></a>
              
            </div>
            <div className="info">
              <h1 className="card-title">
                {teacher.titul} {teacher.jmeno}
              </h1>
              <p className="card-text">Třídní třída: {teacher.tridniTrida}</p>
              <p className="card-text">Kabinet: {teacher.kabinet}</p>
              <p className="card-text">Email: {teacher.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
