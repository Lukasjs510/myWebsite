import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addWorkexp } from "../../actions/workexp";

export class AddJob extends Component {
  state = {
    title: "",
    company: "",
    start: "",
    end: "",
    description: "",
  };

  static propTypes = {
    addWorkexp: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, company, start, end, description } = this.state;
    const workexp = { title, company, start, end, description };
    this.props.addWorkexp(workexp);
  };

  render() {
    const { title, company, start, end, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4>Add Job Form</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              className="form-control"
              type="text"
              name="company"
              onChange={this.onChange}
              value={company}
            />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input
              className="form-control"
              type="text"
              name="start"
              onChange={this.onChange}
              value={start}
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              className="form-control"
              type="text"
              name="end"
              onChange={this.onChange}
              value={end}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addWorkexp })(AddJob);
