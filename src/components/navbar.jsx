import { Link } from "react-router-dom";

const NavBar = ({ routes = [] }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        {/* <Link className="navbar-brand" to="/">
          React Route
        </Link> */}

        <ul className="navbar-nav me-auto mb-md-0">
          {routes.map(({ title, path }) => (
            <li key={path} className="nav-item">
              <Link className="nav-link" to={path} children={title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
