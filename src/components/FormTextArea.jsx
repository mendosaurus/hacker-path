import React, { Component } from "react";

export default class FormTextArea extends Component {
  render() {
    return (
      <div className="form-group container">
        <label htmlFor="exampleInputEmail1">{this.props.label}</label>
        <textarea
          className="form-control form-control-lg"
          value={this.props.value}
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
