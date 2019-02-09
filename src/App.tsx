import React, { Component } from "react";
import moment from "moment";
import "./App.css";

import Space from "./components/space";
import Result from "./components/result";
import ChessBoard from "./components/chess-board";
import Results from "./components/results";
import Instruction from "./components/instruction";
import { randomSpace } from "./utilities/board";

class App extends Component<
  {},
  {
    highlighted: Map<string, string>;
    results: Array<Result>;
    space: Space;
    timeLastAssigned: moment.Moment;
  }
> {
  constructor(props: Object) {
    super(props);

    this.state = {
      highlighted: new Map(),
      results: [],
      space: randomSpace(),
      timeLastAssigned: moment()
    };
  }

  render() {
    return (
      <div className="app">
        <div className="left">
          <Instruction space={this.state.space} />
          <ChessBoard
            highlighted={this.state.highlighted}
            chooseSpace={this.chooseSpace}
          />
        </div>
        <div className="right">
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }

  chooseSpace = (space: Space) => {
    const result = space.sameAs(this.state.space);
    const now = moment();
    const newHighlight = new Map();
    newHighlight.set(this.state.space.asString(), result ? "green" : "red");
    this.setState({
      highlighted: newHighlight,
      timeLastAssigned: now,
      results: [
        new Result(
          result,
          this.state.space,
          now.diff(this.state.timeLastAssigned) / 1000.0
        ),
        ...this.state.results
      ],
      space: randomSpace()
    });
  };
}

export default App;
