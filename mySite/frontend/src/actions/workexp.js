import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_WORKEXP, DELETE_WORKEXP, ADD_WORKEXP } from "./types";

// GET WORKEXP
export const getWorkexp = () => (dispatch, getState) => {
  axios
    .get("./api/workexp/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_WORKEXP,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE WORKEXP
export const deleteWorkexp = (id) => (dispatch, getState) => {
  axios
    .delete(`./api/workexp/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ workexpDeleted: "Work Experince Deleted!" }));
      dispatch({
        type: DELETE_WORKEXP,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD WORKEXP
export const addWorkexp = (workexp) => (dispatch, getState) => {
  axios
    .post(`./api/workexp/`, workexp, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ workexpAdded: "Work Experince Added!" }));
      dispatch({
        type: ADD_WORKEXP,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
