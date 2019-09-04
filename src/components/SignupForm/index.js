import React from "react";
import "../../assets/css/form.css";
import { Link } from "react-router-dom";

const SignupForm = ({
  email,
  firstName,
  lastName,
  password,
  confirmPassword,
  onChange,
  onRegister,
  loading,
}) => (
  <div id="form-container">
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
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          placeholder="Enter First name"
          name="firstName"
          value={firstName}
          onChange={onChange}
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="Enter Last name"
          name="lastName"
          value={lastName}
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
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          required
        />
        <button
          type="submit"
          className="btn"
          style={{ outline: "none" }}
          onClick={onRegister}
        >
          Sign up
        </button>
        <div className="have-account">
          <p>
          <span>{loading ? <div className="loader" /> : <div />}</span>
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
);

export default SignupForm;
