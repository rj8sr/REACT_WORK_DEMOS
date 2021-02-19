import React, { Component } from "react";

class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          ></input>
          <div>
            comments:
            <textarea
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default form;
