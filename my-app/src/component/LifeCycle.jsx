import React, { Component } from "react";

export default class LifeCycle extends Component {
  //   const [item, setItem] = useState();

  state = {
    character: {},
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://swapi.dev/api/people/5")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ character: data });
      });
  }
  render() {
    return (
      <div>
        <h1>Star wars</h1>
        <h1>{this.state.character.name}</h1>
      </div>
    );
  }
}
