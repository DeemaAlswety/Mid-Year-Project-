import { Component } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Signup({ auth, setAuth }) {
  const location = useLocation();
  return (
    <div className="App">
      {/* create signup form */}
      <form
        className="Signup"
        onSubmit={(e) => {
          e.preventDefault();
          setAuth(!auth);
        }}
      >
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            e.preventDefault();
            setAuth(!auth);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            e.preventDefault();
            setAuth(!auth);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            e.preventDefault();
            setAuth(!auth);
          }}
        />
        <input
          type="submit"
          value="Sign up"
          className="details_link"
          id="signup"
          onClick={() => setAuth(!auth)}
        />
      </form>
    </div>
  );
}

export default Signup;