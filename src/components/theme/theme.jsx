import PropTypes from "prop-types";

function Theme({ children, type }) {
  return (
    <div className={[type].join(" ")}>
      {children}
    </div>
  );
}

Theme.propTypes = {
  type: PropTypes.oneOf(["UserPage", "PostPage"],).isRequired,
};

export default Theme;
