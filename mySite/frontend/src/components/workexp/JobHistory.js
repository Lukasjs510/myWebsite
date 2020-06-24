import React, { Component } from "react";
import Job from "./job";

export class jobHistory extends Component {
  render() {
    return (
      <div>
        <h4>Job History List</h4>
        <Job />
      </div>
    );
  }
}

export default jobHistory;
