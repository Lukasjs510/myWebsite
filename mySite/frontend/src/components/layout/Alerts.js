import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) alert.error(`title: ${error.msg.title.join()}`);
      if (error.msg.company)
        alert.error(`company: ${error.msg.company.join()}`);
      if (error.msg.start) alert.error(`start: ${error.msg.start.join()}`);
      if (error.msg.end) alert.error(`end: ${error.msg.end.join()}`);
      if (error.msg.description)
        alert.error(`description: ${error.msg.description.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.workexpDeleted) alert.success(message.workexpDeleted);
      if (message.workexpAdded) alert.success(message.workexpAdded);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
