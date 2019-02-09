import React, { Component } from "react";
import Result from "../components/result";

class Instruction extends Component<{ results: Array<Result> }, {}> {
  render() {
    return (
      <div className="results">
        {this.props.results.map(result => (
          <div className="result">
            <div>
              {result.space.file}
              {result.space.rank}
            </div>
            <div>{result.time}</div>
            <div>{result.correct ? "Correct" : "Wrong"}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Instruction;
