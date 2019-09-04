import React from "react";
import "../../assets/css/form.css";
import { Link } from "react-router-dom";

function LoginForm({ onChange, email, password, onLogin, loading }) {

  return (
    <div id="form-container">
      <form>
        <div className="bg-img">
          <h1>Login Here</h1>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
          {loading ? (
            <button
              className="btn submit-link"
              disabled
              style={{ outline: "none" }}
              onClick={onLogin}
            >
              Login
            </button>
          ) : (
            <button
              className="btn submit-link"
              style={{ outline: "none" }}
              onClick={onLogin}
            >
              Login
            </button>
          )}
          <div className="have-account">
            <p>
              <span>{loading ? <div className="loader" /> : <div />}</span>
              <span>Don&apos;t have account?</span>
              <span>
                <Link className="btn" to="/signup">
                  Sign up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
