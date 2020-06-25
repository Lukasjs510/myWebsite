import { GET_WORKEXP, DELETE_WORKEXP, ADD_WORKEXP } from "../actions/types.js";

const intialState = {
  workexp: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_WORKEXP:
      return {
        ...state,
        workexp: action.payload,
      };
    case DELETE_WORKEXP:
      return {
        ...state,
        workexp: state.workexp.filter(
          (workexp) => workexp.id !== action.payload
        ),
      };
    case ADD_WORKEXP:
      return {
        ...state,
        workexp: [...state.workexp, action.payload],
      };
    default:
      return state;
  }
}
