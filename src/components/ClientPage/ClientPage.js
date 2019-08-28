import React from "react";
import "../../assets/css/client.css";
import { Link } from 'react-router-dom';

function ClientPage() {
  return (
    <div>
      <div id="header">
        <div id="container">
        <div className="navigation">
            <Link to="/">
              <p className="logo">Banka</p>
            </Link>
            <nav id="nav">
              <ul>
                <li>
                  <Link className="btn" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="btn" to="/login">
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
          <main id="client">
              <div id="container">
                <section>
                  <div id="client-container">
                    <div className="client-actions">
                      <div className="client-items user-detail">
                      <h1>Welcome, Client</h1>
                      </div>
                      <div className="client-items account-actions">
                      <Link to="/Client" id="btn-link" >
                          <button id="create-account" className="client-btn">
                            Create Account
                          </button>
                        </Link>
                        <Link to="/Profile" id="btn-link" >
                          <button id="view-profile" className="client-btn">
                            Account Profile
                          </button>
                        </Link>
                        <Link to="/History" id="btn-link" >
                          <button id="view-transactions" className="client-btn">
                            Transaction History
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="client-details account-summary">
                      <li id="account-created" className="account-created ">
                        Account successfully created
                      </li>
                      <div
                        id="create-account-form"
                        className="client-items create-account-form"
                      >
                        <div className="client-item account-summary">
                          <p>Create Account:</p>
                        </div>
                      </div>
                        <form action className="account-create">
                          <fieldset>
                            <legend>Select Account Type:</legend>
                            <span className="select-account">
                              <span>Type of Account:</span>
                              <span>
                              <select
                                className="account-type"
                                value="account-type"
                              >
                                <option name="savings" id="savings">
                                  Savings
                                </option>
                                <option name="current" id="current">
                                  Current
                                </option>
                              </select>
                              </span>
                              <span>
                              <button id="create" className="client-btn create">
                                Create Account
                              </button>
                              </span>
                            </span>
                          </fieldset>
                        </form>
                    </div>
                  </div>
                </section>
              </div>
            </main>
            <footer id="footer">
              <p>Tobechukwu Obitube © 2019.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
