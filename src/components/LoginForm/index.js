import React from "react";
import "../../assets/css/form.css";
import { Link } from "react-router-dom";

function LoginForm({ onChange, email, password, onLogin, loading }) {
  // const { email, password, onChange, onLogin, loading } = props;

  return (
    <div id="form-container">
      <form>
        <div className="bg-img">
          <h1>Login Here</h1>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Email"
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
          {/* <Link className="submit-link" to="/Client">
            <button type="submit" className="btn">
              Login
            </button>
          </Link> */}
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
          {loading ? <div className="loader" /> : <div />}
          <div className="have-account">
            <p>
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
