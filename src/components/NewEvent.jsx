import React, { Component } from "react";
import FormField from "./FormField";
import Button from "./Button";
import FormTextArea from "./FormTextArea";
import axios from "axios";

export default class NewEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time_start: "",
      time_end: "",
      venue_name: "",
      venue_address: "",
      description: ""
    };
  }
  handleNameInput = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleTaglineInput = e => {
    this.setState({
      tagline: e.target.value
    });
  };
  handleDescriptionInput = e => {
    console.log(e.target.value);
    this.setState({
      description: e.target.value
    });
  };
  handleFirst_brewedInput = e => {
    this.setState({
      first_brewed: e.target.value
    });
  };
  handleBrewers_tipsInput = e => {
    this.setState({
      brewers_tips: e.target.value
    });
  };
  handleAttenuation_level = e => {
    this.setState({
      attenuation_level: e.target.value
    });
  };
  handleContributed_by = e => {
    this.setState({
      contributed_by: e.target.value
    });
  };
  handleFormSubmit = e => {
    const allInput = this.state;
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", allInput)
      .then(e => console.log(e));
  };
  render() {
    console.log(this.state);
    return (
      <form>
        <FormField
          inputChange={e => this.handleNameInput(e)}
          name="name"
          label="Event Name"
          type="text"
          placeholder="Event name"
        />
        <FormField
          inputChange={e => this.handleFirst_brewedInput(e)}
          name="date"
          label="Date"
          type="date"
          placeholder="date"
        />
        <FormField
          inputChange={e => this.handleFirst_brewedInput(e)}
          name="time_start"
          label="Time Start"
          type="time"
          placeholder="time start"
        />
        <FormField
          inputChange={e => this.handleFirst_brewedInput(e)}
          name="time_end"
          label="Time End"
          type="time"
          placeholder="time end"
        />
        <FormField
          inputChange={e => this.handleTaglineInput(e)}
          name="tagline"
          label="Tagline"
          type="text"
          placeholder="Not the best beer"
        />
        <FormTextArea
          defaultValue="" // need to set default value to use textarea otherwise it returns error
          inputChange={e => this.handleDescriptionInput(e)}
          label="Description"
          name="description"
          placeholder="describe your event"
        />
        <Button
          submit={e => this.handleFormSubmit(e)}
          info="Creat Study Group"
        />
      </form>
    );
  }
}
