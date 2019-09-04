import React, { Component } from "react";
import "../../assets/css/auth.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { connect } from "react-redux";
import { notify } from "react-notify-toast";
import { loginAction } from "../../actions/authActions";
export class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
  };

  UNSAFE_componentDidMount() {
    const user_token = localStorage.getItem("user_token");
    if (user_token) {
      this.setState({
        redirect: true,
      });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    const loginData = {
      email,
      password,
    };
    if (email === "") {
      notify.show("Please provide an email", "error", 4000);
      return;
    }
    if (password === "") {
      notify.show("Please provide a password", "error", 4000);
      return;
    }
    login(loginData, history);
  };

  render() {
    const { loading, history } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      history.push("/client");
      location.reload();
      return;
    }

    return (
      <div id="header">
        <div id="container">
          <div className="navigation">
            <Link to="/" className="app-logo ">
              <p className="logo">Banka</p>
            </Link>
            <nav id="nav">
              <ul>
                <li>
                  <NavLink className="btn" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="btn" to="/Signup">
                    Signup
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <main id="signup">
            <section>
              <LoginForm
                loading={loading}
                onChange={this.onChange}
                onLogin={this.onLogin}
              />
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      login: loginAction,
    },
  )(LoginPage),
);
