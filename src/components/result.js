import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;

    let style = {
      backgroundColor: "red",
    };

    return (
      <div className="result" style={style}>
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
