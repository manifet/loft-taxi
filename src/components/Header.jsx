import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logOut, getIsLoggedIn } from "../modules/authorization";

class Header extends React.Component {
  unauthenticate = () => {
    this.props.logOut();
    this.props.navigate("auth");
  };

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  this.props.navigate("map");
                }}
              >
                Карта
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.navigate("profile");
                }}
              >
                Профиль
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.unauthenticate();
                }}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  navigate: PropTypes.func.isRequired,

  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect((state) => ({ isLoggedIn: getIsLoggedIn }), { logOut })(
  Header
);
