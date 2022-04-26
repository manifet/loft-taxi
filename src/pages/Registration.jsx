import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { logIn, getIsLoggedIn } from "../modules/authorization";

class Registaration extends Component {
  state = { email: "", password: "", name: "" };

  registrate = (event) => {
    event.preventDefault();
    this.props.navigate("map");
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Регистрация</h1>
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
          <label htmlFor="name">Как вас зовут?</label>
          <input
            type="name"
            name="name"
            value={name}
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
            this.registrate();
          }}
        >
          Зарегистрироваться
        </button>
        <div>
          Уже зарегистрированы?{" "}
          <button
            onClick={() => {
              this.props.navigate("auth");
            }}
          >
            Войти
          </button>
        </div>
      </form>
    );
  }
}

Registaration.propTypes = {
  navigate: PropTypes.func.isRequired,

  logIn: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect((state) => ({ isLoggedIn: getIsLoggedIn }), { logIn })(Registaration);
