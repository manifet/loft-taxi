import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getIsLoggedIn, logIn } from "../modules/authorization";

class Auth extends Component {
  state = { email: "", password: "" };

  authenticate = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);

    if (this.props.isLoggedIn) {
      this.props.navigate("map");
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.authenticate}>
        <h1>Войти</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <span>Забыли пароль?</span>
        <button
          type="submit"
          onClick={() => {
            this.props.navigate("map");
          }}
        >
          Войти
        </button>
        <div>
          Новый пользователь?{" "}
          <button
            onClick={() => {
              this.props.navigate("registration");
            }}
          >
            Регистрация
          </button>
        </div>
      </form>
    );
  }
}

Auth.propTypes = {
  navigate: PropTypes.func.isRequired,

  logIn: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect((state) => ({ isLoggedIn: getIsLoggedIn }), { logIn })(
  Auth
);
