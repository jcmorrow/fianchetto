import React, { Component } from "react";
import "./App.css";

import Space from "./components/space";
import ChessBoard from "./components/chess-board";
import Instruction from "./components/instruction";
import { randomSpace } from "./utilities/board";

class App extends Component<{}, { space: Space }> {
  constructor(props: Object) {
    super(props);

    this.state = {
      space: randomSpace()
    };
  }

  render() {
    return (
      <div className="App">
        <Instruction space={this.state.space} />
        <ChessBoard chooseSpace={this.chooseSpace} />
      </div>
    );
  }

  chooseSpace = (space: Space) => {
    if (
      space.rank === this.state.space.rank &&
      space.file === this.state.space.file
    ) {
      console.log("CORRECT");
    } else {
      console.log("INCORRECT");
    }
    this.setState({ space: randomSpace() });
  };
}

export default App;
