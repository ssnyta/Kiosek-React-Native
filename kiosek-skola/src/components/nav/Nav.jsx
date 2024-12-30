import "../nav/Nav.css";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Vítkovická Střední Průmyslová Škola
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/teacher">
                Kde najdu učitelé ?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aktuality Školy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kontakty
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
