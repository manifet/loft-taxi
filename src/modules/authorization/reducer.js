import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { logOut, logIn } from "./actions";

const isLoggedIn = handleActions(
  {
    [logOut]: () => false,
    [logIn]: () => true,
  },
  false
);

export default combineReducers({
  isLoggedIn,
});
