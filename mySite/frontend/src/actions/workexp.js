import axios from "axios";
import { createMessage } from "./messages";

import { GET_WORKEXP, DELETE_WORKEXP, ADD_WORKEXP, GET_ERRORS } from "./types";

// GET WORKEXP
export const getWorkexp = () => (dispatch) => {
  axios
    .get("./api/workexp/")
    .then((res) => {
      dispatch({
        type: GET_WORKEXP,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE WORKEXP
export const deleteWorkexp = (id) => (dispatch) => {
  axios
    .delete(`./api/workexp/${id}/`)
    .then((res) => {
      dispatch(createMessage({ workexpDeleted: "Work Experince Deleted!" }));
      dispatch({
        type: DELETE_WORKEXP,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD WORKEXP
export const addWorkexp = (workexp) => (dispatch) => {
  axios
    .post(`./api/workexp/`, workexp)
    .then((res) => {
      dispatch(createMessage({ workexpAdded: "Work Experince Added!" }));
      dispatch({
        type: ADD_WORKEXP,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
