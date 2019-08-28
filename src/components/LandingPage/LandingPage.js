import React from "react";
import "../../assets/css/homepage.css";
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <div id="header">
        <div id="container">
          <div className="navigation">
          <Link to="/"><p className="logo">Banka</p></Link>
            <nav id="nav">
              <ul>
                <li>
                  <Link className="btn" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-caption">
            <div className="caption-contents">
              <h1>Banka Money Services</h1>
              <p>Manage Your Money with Ease</p>
              <Link className="call-to-action" to="/signup">
                Bank with us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <p>Tobechukwu Obitube © 2019.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
