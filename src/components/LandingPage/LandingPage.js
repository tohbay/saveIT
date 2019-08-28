import React from "react";
import "../../assets/css/homepage.css";


function LandingPage() {
  return (
    <div>
      <div id="header">
        <div id="container">
          <div className="navigation">
          <a href="/"><p className="logo">Banka</p></a>
            <nav id="nav">
              <ul>
                <li>
                  <a className="btn" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-caption">
            <div className="caption-contents">
              <h1>Banka Money Services</h1>
              <p>Manage Your Money with Ease</p>
              <a className="btn" href="/signup">
                Bank with us
              </a>
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
