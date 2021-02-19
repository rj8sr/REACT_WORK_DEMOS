import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callbackvalue", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>count-{this.state.count}</h1>
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

export default counter;
