import React from "react";
import "../../assets/css/form.css";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const { email, password, onChange, onLogin, loading } = props;

  return (
    <div id="form-container">
      <form action="/Client">
        <div className="bg-img">
          <h1>Login Here</h1>
          <label htmlFor="email">Email</label>
          <input placeholder="Enter Email" name="email" type="email" required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <Link className="submit-link" to="/Client">
            <button type="submit" className="btn">
              Login
            </button>
          </Link>
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
