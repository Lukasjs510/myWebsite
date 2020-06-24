import React, { Fragment } from "react";
import AddJob from "../workexp/AddJob";
import JobHistory from "../workexp/JobHistory";

export default function Dash() {
  return (
    <Fragment>
      <AddJob />
      <JobHistory />
    </Fragment>
  );
}
