import {
  GET_WELCOME,
  DELETE_WELCOME,
  ADD_WELCOME,
  EDIT_WELCOME,
} from "../actions/types.js";

const intialState = {
  welcome: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_WELCOME:
      return {
        ...state,
        welcome: action.payload,
      };
    case DELETE_WELCOME:
      return {
        ...state,
        welcome: state.welcome.filter(
          (welcome) => welcome.id !== action.payload
        ),
      };
    case ADD_WELCOME:
      return {
        ...state,
        welcome: [...state.welcome, action.payload],
      };
    case EDIT_WELCOME:
      return {
        ...state,
        welcome: [...state.welcome, action.payload],
      };
    default:
      return state;
  }
}
