import React from "react";
import { Link } from 'react-router-dom';
Link

export default function NavBar({onSignout}) {
  return (
    <div>
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
              <Link className="btn" to="/login" onClick={onSignout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
