import React, { Component } from "react";
import Space from "../components/space";

class Instruction extends Component<{ space: Space }, {}> {
  render() {
    return (
      <div className="instruction">
        {this.props.space.file}
        {this.props.space.rank}
      </div>
    );
  }
}

export default Instruction;
