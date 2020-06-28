import { combineReducers } from "redux";
import workexp from "./workexp";
import errors from "./errors";
import messages from "./messages";
import welcome from "./welcome";
import auth from "./auth";

export default combineReducers({
  workexp,
  errors,
  messages,
  welcome,
  auth,
});
