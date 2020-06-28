import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getWorkexp, deleteWorkexp } from "../../actions/workexp";

export class JobHistory extends Component {
  static propTypes = {
    workexp: PropTypes.array.isRequired,
    getWorkexp: PropTypes.func.isRequired,
    deleteWorkexp: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getWorkexp();
  }

  render() {
    return (
      <Fragment>
        <h4>Work Experince</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Company</th>
              <th>Date</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.workexp.map((workexp) => (
              <tr key={workexp.id}>
                <td>{workexp.id}</td>
                <td>{workexp.title}</td>
                <td>{workexp.company}</td>
                <td>
                  {workexp.start} to {workexp.end}
                </td>
                <td>{workexp.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteWorkexp.bind(this, workexp.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  workexp: state.workexp.workexp,
});

export default connect(mapStateToProps, { getWorkexp, deleteWorkexp })(
  JobHistory
);
