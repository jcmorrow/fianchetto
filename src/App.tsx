import React, { Component } from "react";
import "./App.css";

import Space from "./components/space";
import ChessBoard from "./components/chess-board";
import Instruction from "./components/instruction";
import { randomSpace } from "./utilities/board";

class App extends Component<{}, { highlighted: Space | null; space: Space }> {
  constructor(props: Object) {
    super(props);

    this.state = {
      highlighted: null,
      space: randomSpace()
    };
  }

  render() {
    return (
      <div className="App">
        <Instruction space={this.state.space} />
        <ChessBoard
          highlighted={this.state.highlighted}
          chooseSpace={this.chooseSpace}
        />
      </div>
    );
  }

  chooseSpace = (space: Space) => {
    if (space.sameAs(this.state.space)) {
      console.log("CORRECT");
    } else {
      console.log("INCORRECT");
    }
    this.setState({ highlighted: this.state.space, space: randomSpace() });
  };
}

export default App;
