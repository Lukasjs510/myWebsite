import { combineReducers } from "redux";
import workexp from "./workexp";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  workexp,
  errors,
  messages,
});
