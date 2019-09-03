import React, { Component } from "react";
import "../../assets/css/auth.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { notify } from "react-notify-toast";
import { registerAction } from "../../actions/authActions";
import SignupForm from "../../components/SignupForm";

export class SignupPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    redirect: false,
  };

  componentDidMount() {
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

  onRegister = event => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    const { history, register } = this.props;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      notify.show("Kindly populate all fields", "error", 4000);
      return;
    }
    if (password !== confirmPassword) {
      notify.show("Your passwords do not match", "error", 4000);
      return;
    }
    register({ ...this.state }, history);
  };

  render() {
    const { loading, history } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      history.push("/login");
      location.reload();
      return;
    }
    return (
      <div id="header">
        <div id="container">
          <div className="navigation">
            <Link to="/" className="app-logo">
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
                  <NavLink className="btn" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <main id="signup">
            <section>
              <SignupForm
                onRegister={this.onRegister}
                onChange={this.onChange}
                loading={loading}
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
      register: registerAction,
    },
  )(SignupPage),
);
