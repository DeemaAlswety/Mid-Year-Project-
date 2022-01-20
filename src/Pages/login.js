import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

const LogIn = ({ auth, setAuth }) => {
  return (
    <div >
      <Link to="/home" className="Google" style={{color:"black"}} onClick={() => setAuth(!auth)}>
        Login With Google{" "}
      </Link>
      <Link to={`/signup`} className="Signup">
        {" "}
        Sign Up{" "}
      </Link>
    </div>
  );
};

export default LogIn;