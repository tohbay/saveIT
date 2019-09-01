import React from "react";
import "../../assets/css/signup.css";
import { Link } from "react-router-dom";

function SignupForm(props) {
  const {
    email,
    firstname,
    lastname,
    password,
    confirm_password,
    onChange,
    onSignup,
    loading,
  } = props;

  return (
    <div>
      <div id="form-container" action="/client" className="user-form">
        <form>
          <div className="bg-img">
            <h1>Sign up Here</h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              placeholder="Enter First name"
              name="firstname"
              value={firstname}
              onChange={onChange}
              required
            />
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              placeholder="Enter Last name"
              name="lastname"
              value={lastname}
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              required
            />
            <Link className="submit-link" to="/Client">
              <button type="submit" className="btn" onClick={onSignup}>
                Sign up
              </button>
              {loading ? <div className="loader" /> : <div />}
            </Link>
            <div className="have-account">
              <p>
                <span>Already have account?</span>
                <span>
                  <Link className="btn" to="/Login">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
