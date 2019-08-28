import React from "react";
import "../../assets/css/signup.css";
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div>
      <div id="header">
        <div id="container">
          <div className="navigation">
            <a href="/">
              <p className="logo">Banka</p>
            </a>
            <nav id="nav">
              <ul>
                <li>
                  <Link className="btn" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="btn" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <main id="signup">
            <section>
              <div id="form-container" action="/client" className="user-form">
                <form >
                  <div className="bg-img">
                    {/* The lines of code for the form is credited to https://www.w3schools.com/css/css_form.asp */}
                    <h1>Sign up Here</h1>
                    <label htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      required
                    />
                    <label htmlFor="firstName">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First name"
                      name="firstName"
                      required
                    />
                    <label htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last name"
                      name="lastName"
                      required
                    />
                    <label htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      required
                    />
                    <label htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      required
                    />
                    <Link className="submit-link" to="/Client">
                      <button type="submit" className="btn">
                        Sign up
                      </button>
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
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
