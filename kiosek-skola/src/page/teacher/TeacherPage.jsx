import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../teacher/TeacherPage.css";
import { Nav } from "../../components/nav/Nav";
import { SearchBar } from "../../components/searchBar/searchBar";
import data from "../../../teachers.json";

export const TeacherPage = () => {
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = data.ucitele.filter((teacher) =>
      teacher.jmeno.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeachers(filtered);
    setSearched(true);
  };

  const handleTeacherClick = (teacher) => {
    navigate(`/teacher/detail`, { state: { teacher } });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {searched && (
          <ul className="teacher-list">
            {filteredTeachers.map((teacher, index) => (
              <li
                key={index}
                className="teacher-item"
                onClick={() => handleTeacherClick(teacher)}
              >
                {teacher.jmeno}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};