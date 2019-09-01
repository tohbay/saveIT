import React from "react";
import "../../assets/css/client.css";
import { Link } from 'react-router-dom';
import ClientForm from '../../components/ClientForm';

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
                  <ClientForm />
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