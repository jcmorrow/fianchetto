import React, { Component } from "react";

import { color, file, rank } from "../utilities/board";
import Space from "./space";

class ChessBoard extends Component<
  {
    chooseSpace: (space: Space) => void;
    highlighted: Map<string, string>;
  },
  { board: Array<Space>; flipped: boolean; labels: boolean }
> {
  constructor(props: {
    chooseSpace: (space: Space) => void;
    highlighted: Map<string, string>;
  }) {
    super(props);
    this.state = {
      board: this.createBoard(),
      flipped: false,
      labels: false
    };
  }

  render() {
    const { highlighted } = this.props;
    const { board, labels } = this.state;
    return (
      <div>
        <div className="board">
          {new Array(8).fill(undefined).map((_r, r) => {
            return (
              <div className="rank" key={r}>
                {new Array(8).fill(undefined).map((_f, f) => {
                  const space = board[r * 8 + f];
                  return (
                    <div
                      className={`space ${space.color} ${highlighted.get(
                        space.asString()
                      ) || ""}`}
                      key={f}
                      onClick={() => this.onClickSpace(space)}
                    >
                      {labels ? space.asString() : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="controls">
          <button onClick={this.flipBoard}>Flip Board</button>
          <button onClick={this.toggleLabels}>Toggle Labels</button>
        </div>
      </div>
    );
  }

  flipBoard = () => {
    this.setState({
      flipped: !this.state.flipped,
      board: this.createBoard(!this.state.flipped)
    });
  };

  createBoard = (flipped: boolean = false): Array<Space> => {
    return new Array(64)
      .fill(undefined)
      .map((_space, i) => this.createSpace(i, flipped));
  };

  createSpace = (i: number, flipped: boolean): Space => {
    return new Space(file(i, flipped), rank(i, flipped), color(i, flipped));
  };

  onClickSpace = (space: Space) => {
    this.props.chooseSpace(space);
  };

  toggleLabels = () => {
    this.setState({ labels: !this.state.labels });
  };
}

export default ChessBoard;
