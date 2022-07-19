import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../Services/auth.services";

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        window.location.reload();

    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
                    Final Task
                </NavLink>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="mobileMenu">
                    {currentUser && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-name">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-name">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/Bookmarks"
                                >
                                    Bookmarks
                                </NavLink>
                            </li>
                          <li>
                            
                          var status = "less";
function showLess() {
    if (status == "less") {
      document.getElementById("showMoreButton").id = "showLessButton";
        document.getElementById("showMoreButton").innerText = "SHOW LESS";
        status = "more";
    } else if (status == "more") {
      document.getElementById("showLessButton").id = "showMoreButton";
        document.getElementById("showMoreButton").innerText = "SHOW MORE";
        status = "less"
    }
}
                          </li>

                        </ul>
                        
                    )}
                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
