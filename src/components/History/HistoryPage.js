import React from "react";
import "../../assets/css/transaction.css";
import { Link } from 'react-router-dom';

function HistoryPage() {
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
                        id="transaction-history"
                        className="client-items transaction"
                      >
                        <div className="client-items account-summary user-detail">
                          <p>Transactions History</p>
                        </div>
                        
                      </div>
                      <div className="card">
                          <div className="card-container">
                            <h3>Savings Account</h3>
                            <div className="account-details">
                              <div className="transactions">
                                <div className="amount">
                                  <p>19th March 2019.</p>
                                  <p className="credit">Credit</p>
                                  <p className="actual">#50.00</p>
                                  <p id="view-details" className="view">
                                    View details
                                  </p>
                                </div>
                                <hr />
                              </div>
                              <div className="transactions">
                                <div className="amount">
                                  <p>26th March 2019.</p>
                                  <p className="debit">Debit</p>
                                  <p className="actual">#50.00</p>
                                  <p id="view-details" className="view">
                                    View details
                                  </p>
                                </div>
                                <hr />
                              </div>
                            </div>
                          </div>
                          <div className="card-container">
                            <h3>Current Account</h3>
                            <div className="account-details">
                              <p className="history">No transactions here</p>
                            </div>
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

export default HistoryPage;
