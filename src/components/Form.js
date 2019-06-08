import React, { Component } from 'react';

// Child class-component
// We must set constructor to be able to get the props and use `this` keyword to
// be able to set the state.
export default class From extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState; // own state of child component
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ // update own state child component
      [name]: value,
    });
  }

  submitForm = () => {
    if (!this.state.name || !this.state.job) return;
    this.props.handleSubmit(this.state); // push in props the state
    this.setState(this.initialState); // reset state
  }

  render() {
    const { name, job } = this.state; // set props retrive it from state

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm} />
      </form>
    )
  }
}
