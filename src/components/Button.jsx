import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.submit}
        type="button"
        className="btn btn-outline-primary"
      >
        {this.props.info}
      </button>
    );
  }
}
