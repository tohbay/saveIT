import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../assets/css/client.css";
import ClientForm from "../../components/ClientForm";
import { accountsAction } from "../../actions/accountsActions";

import Select from "../../components/Select/index";
import ConfirmDialog from "../../components/ConfirmDialog";
import NavBar from "../../components/NavBar";

export class ClientPage extends Component {
  state = {
    type: "",
    createAccountDialog: false,
    redirect: false,
  };

  change = event => {
    this.setState({ type: event.target.value });
  };

  componentDidMount() {
    const user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.setState({
        redirect: true,
      });
    }
  }

  onSignout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("email");
  };

  showConfirmDialog = () => {
    this.setState({
      createAccountDialog: true,
      price: `${(Math.floor(Math.random() * 60) + 20) * 1000}`,
    });
  };

  createAccount = () => {
    const { createAccount, history } = this.props;
    const { accountType, account } = this.state;
    const accountData = {
      selectedAccountType: accountType,
      type: account
    }
    createAccount(accountData, history)
  };

  hideConfirmDialog = () => {
    this.setState({
      createAccountDialog: false,
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { accountType, createAccountDialog, account, redirect } = this.state;
    const { history, loading } = this.props;
    if (redirect) {
      history.push("/");
      location.reload();
      return;
    }
    return (
      <div>
        <div id="header">
          <div id="container">
            {createAccountDialog ? (
              <ConfirmDialog
                hideConfirmDialog={this.hideConfirmDialog}
                makeOrder={this.createAccount}
                account={account}
                loading={loading}
              />
            ) : (
              <div />
            )}
            <NavBar onSignout={this.onSignout} />
            <div>
              <main id="client">
                <div id="container">
                  <div className="contain">
                    <h1>
                      Create a<span> Bank Account </span> with{" "}
                      <span> Ease</span>
                    </h1>
                    <div className="form-box">
                      <span className="from">Account Type: </span>
                      <Select
                        selectedAccountType={accountType}
                        type="type"
                        handleChange={this.handleChange}
                      />
                      <button
                        className="account-btn"
                        onClick={this.showConfirmDialog}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
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
}

export const mapStateToProps = state => ({
  loading: state.accounts.createAccountLoading,
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      createAccount: accountsAction,
    },
  )(ClientPage),
);
