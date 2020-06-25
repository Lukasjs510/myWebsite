import axios from "axios";

import { GET_WORKEXP, DELETE_WORKEXP, ADD_WORKEXP } from "./types";

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
      dispatch({
        type: ADD_WORKEXP,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
