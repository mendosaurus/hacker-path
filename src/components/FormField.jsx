import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    return (
      <div className="form-group container">
        <label htmlFor="exampleInputEmail1">{this.props.label}</label>
        <input
          className="form-control form-control-lg"
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.inputChange}
          rows={this.props.rows}
        />
      </div>
    );
  }
}
