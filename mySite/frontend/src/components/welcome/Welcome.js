import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getWelcome, editWelcome } from "../../actions/welcome";

export class Welcome extends Component {
  static propTypes = {
    welcome: PropTypes.array.isRequired,
    getWelcome: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getWelcome();
  }

  render() {
    return (
      <Fragment>
        <div>
          <h4>{this.props.welcome.title}</h4>
          <p>{this.props.welcome.text}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  welcome: state.welcome.welcome,
});

export default connect(mapStateToProps, { getWelcome, editWelcome })(Welcome);
