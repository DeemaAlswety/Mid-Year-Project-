import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ auth }) => {
    return(
        <nav>
            <h3> Switi For clothes!</h3>
            <ul className="navLinks">
                <li>
                    <Link to ={'/'}>Home</Link>
                </li>
                <li>
                    <Link to ={'/saved'}>Saved</Link>
                </li>
                <li>
                    <Link to ={'/contactus'}>ContactUs</Link>
                </li>
                <li>
                {auth ? null : (
                    <Link to="/LogIn" className="link">
                        Log In{" "}
                    </Link>
                )}
                </li>
                <li>
                    <Link to = {'/signup'}>Signup</Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;