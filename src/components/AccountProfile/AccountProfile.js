import React from "react";
import "../../assets/css/client.css";
import { Link } from 'react-router-dom';

function AccountProfile() {
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
                        <h1>Welcome</h1>
                      </div>
                      <div className="client-items account-actions">
                        <Link id="btn-link" to="/Client">
                          <button id="create-account" className="client-btn">
                            Create Account
                          </button>
                        </Link>
                        <Link id="btn-link" to="/Profile">
                          <button id="view-profile" className="client-btn">
                            Account Profile
                          </button>
                        </Link>
                        <Link id="btn-link" to="/History">
                          <button id="view-transactions" className="client-btn">
                            Transaction History
                          </button>
                        </Link>
                      </div>
                    </div>
                      <div
                        id="account-profile"
                        className="client-items user-account"
                      >
                        <div className="client-item account-summary">
                          <p>Account Profile:</p>
                        </div>
                      </div>
                        <div className="account-profile-details">
                          <div className="account-info">
                            <p>Account Type:</p>
                            <p></p>
                          </div>
                          <div className="account-info">
                            <p>Balance:</p>
                            <p></p>
                          </div>
                          <div className="account-info">
                            <p>Account No:</p>
                            <p></p>
                          </div>
                          <div className="account-info">
                            <p>Status:</p>
                            <p></p>
                          </div>
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

export default AccountProfile;
