import React from "react";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
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
                <Link className="btn" to="/Signup">
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="login-login">
          <section>
            <div id="form-container" className="user-form">
              {/* The lines of code for the form is credited to https://www.w3schools.com/css/css_form.asp */}
              <form action="/Client">
                <div className="bg-img">
                  <h1>Login Here</h1>
                  <label htmlFor="email">Email</label>
                  <input
                    // type="text"
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                    required
                  />
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
