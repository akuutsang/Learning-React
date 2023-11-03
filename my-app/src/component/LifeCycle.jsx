import React, { Component } from "react";

export default class LifeCycle extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: "true",
    employment: "",
    favColor: "",
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  componentDidMount() {
    console.log("componentDidMount");
    // fetch("https://swapi.dev/api/people/1")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ character: data });
    //   });
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
          name="firstName"
          value={this.state.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleChange}
          name="lastName"
          value={this.state.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <input
          type="text"
          placeholder="comments"
          onChange={this.handleChange}
          name="comments"
          value={this.state.comments}
        />
      </form>
    );
  }
}
