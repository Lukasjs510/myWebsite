import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import {
  GET_WELCOME,
  DELETE_WELCOME,
  ADD_WELCOME,
  EDIT_WELCOME,
} from "./types";

// GET WELCOME
export const getWelcome = () => (dispatch) => {
  axios
    .get("./api/welcome/")
    .then((res) => {
      dispatch({
        type: GET_WELCOME,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE WELCOME
export const deleteWelcome = (id) => (dispatch) => {
  axios
    .delete(`./api/welcome/${id}/`)
    .then((res) => {
      dispatch(createMessage({ welcomeDeleted: "Welcome Message Deleted!" }));
      dispatch({
        type: DELETE_WELCOME,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD WELCOME
export const addWelcome = (welcome) => (dispatch) => {
  axios
    .post(`./api/welcome/`, welcome)
    .then((res) => {
      dispatch(createMessage({ welcomeAdded: "Welcome Message Added!" }));
      dispatch({
        type: ADD_WELCOME,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// EDIT WELCOME
export const editWelcome = (welcome, id) => (dispatch) => {
  axios.put(`./api/welcome/${id}/`, welcome).then((res) => {
    dispatch(createMessage({ welcomeEdited: "Welcome Message Edited!" }));
    dispatch({
      type: EDIT_WELCOME,
      payload: (id, res.data),
    });
  });
};
