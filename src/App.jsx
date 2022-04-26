import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "./components/Header";
import Map from "./pages/Map";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

import { getIsLoggedIn } from "./modules/authorization";

class App extends React.Component {
  state = { currentPage: this.props.isLoggedIn ? "map" : "auth" };

  navigationTo = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    switch (this.state.currentPage) {
      case "auth":
        return <Auth navigate={this.navigationTo} />;
      case "registration":
        return <Registration navigate={this.navigationTo} />;
      case "map":
        return (
          <>
            <Header navigate={this.navigationTo} />
            <Map />
          </>
        );
      case "profile":
        return (
          <>
            <Header navigate={this.navigationTo} />
            <Profile />
          </>
        );
      default:
        return null;
    }
  }
}

App.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default connect((state) => ({ isLoggedIn: getIsLoggedIn }))(App);
