import PropTypes from "prop-types";

const Navigation = ({ onPageChange, pages }) => {
  return (
    <header className="row">
      
      <nav className="mt-3">
        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
            <button
              className={`nav-link ${pages.UserPage ? "active" : ""}`}
              onClick={() => onPageChange("UserPage")}>
                  Users </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages.PostPage ? "active" : ""}`}
              onClick={() => onPageChange("PostPage")}>
                  Posts</button>
          </li>               
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Navigation;
