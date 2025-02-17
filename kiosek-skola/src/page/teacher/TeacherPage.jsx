import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../teacher/TeacherPage.css";
import { Nav } from "../../components/nav/Nav";
import { SearchBar } from "../../components/searchBar/searchBar";
import data from "../../../teachers.json";

// 🔹 Funkce pro odstranění diakritiky a převedení na malá písmena
const normalizeString = (str) => {
  return str
    .normalize("NFD") // Rozdělí znaky na základní + diakritiku
    .replace(/[\u0300-\u036f]/g, "") // Odstraní diakritiku
    .toLowerCase(); // Převede na malá písmena
};

export const TeacherPage = () => {
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const normalizedSearchTerm = normalizeString(searchTerm); // 🔹 Odstranění diakritiky
    const filtered = data.ucitele.filter((teacher) =>
      normalizeString(teacher.jmeno).includes(normalizedSearchTerm)
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
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher, index) => (
                <li
                  key={index}
                  className="teacher-item"
                  onClick={() => handleTeacherClick(teacher)}
                >
                  {teacher.jmeno}
                </li>
              ))
            ) : (
              <li>Žádné výsledky</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};
