import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;

    let style = { backgroundColor: this.props.clr };

    return (
      <div className="result" style={style}>
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;
