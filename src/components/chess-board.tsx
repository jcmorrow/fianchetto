import React, { Component } from "react";

import { color, file, rank } from "../utilities/board";
import Space from "./space";

class ChessBoard extends Component<
  { chooseSpace: (space: Space) => void },
  { board: Array<Space> }
> {
  constructor(props: { chooseSpace: (space: Space) => void }) {
    super(props);
    this.state = {
      board: this.createBoard()
    };
  }

  render() {
    return (
      <div className="board">
        {new Array(8).fill(undefined).map((_r, r) => {
          return (
            <div className="rank" key={r}>
              {new Array(8).fill(undefined).map((_f, f) => {
                const space = this.state.board[r * 8 + f];
                return (
                  <div
                    className={`space ${space.color}`}
                    key={f}
                    onClick={() => this.onClickSpace(space)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  createBoard = (): Array<Space> => {
    return new Array(64)
      .fill(undefined)
      .map((_space, i) => this.createSpace(i));
  };

  createSpace = (index: number): Space => {
    return new Space(file(index), rank(index), color(index));
  };

  onClickSpace = (space: Space) => {
    this.props.chooseSpace(space);
  };
}

export default ChessBoard;
