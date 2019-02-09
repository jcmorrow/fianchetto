import React, { Component } from "react";
import Result from "../components/result";

class Instruction extends Component<{ results: Array<Result> }, {}> {
  render() {
    return (
      <table className="results">
        <tbody>
          <tr className="result">
            <th>Space</th>
            <th>Time</th>
            <th>Result</th>
          </tr>
          {this.props.results.map(result => (
            <tr className="result">
              <td>
                {result.space.file}
                {result.space.rank}
              </td>
              <td>{result.time}</td>
              <td>{result.correct ? "Correct" : "Wrong"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Instruction;
