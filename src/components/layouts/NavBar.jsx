import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NavBar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      {/* container for nav bar so it doesnt stretch all the way to the end */}
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
};

NavBar.propTypes = {
  title: PropTypes.string,
};
export default NavBar;
