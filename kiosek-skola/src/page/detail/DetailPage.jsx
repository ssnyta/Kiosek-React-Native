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
        <div className="card card-person">
          <div className="card-body card-body-person">
            <div className="icons">
              <a href="/teacher">
                <img src="../../src/assets/icons/back.png" alt="back_arrow" />
              </a>
              <img
                src="../../src/assets/userpicture.png"
                alt="teacher_picture"
              />
              <a href="/">
                <img src="../../src/assets/icons/home.png" alt="home" />
              </a>
            </div>
            <div className="info">
              <h1 className="card-title card-title-person">
                {teacher.titul} {teacher.jmeno}
              </h1>
              {teacher.role && (
                <p className="card-text card-text-person">Kdo jsem : {teacher.role}</p>
              )}
              {teacher.tridniTrida && teacher.tridniTrida !== "N/A" && (
                <p className="card-text card-text-person">Třídní třída: {teacher.tridniTrida}</p>
              )}
              <p className="card-text card-text-person">Kabinet: {teacher.kabinet}</p>
              <p className="card-text card-text-person">Email: {teacher.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
