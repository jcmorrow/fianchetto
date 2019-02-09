import React, { Component } from "react";

import { color, file, rank } from "../utilities/board";
import Space from "./space";

class ChessBoard extends Component<
  { chooseSpace: (space: Space) => void; highlighted: Space | null },
  { board: Array<Space>; flipped: boolean }
> {
  constructor(props: {
    chooseSpace: (space: Space) => void;
    highlighted: Space | null;
  }) {
    super(props);
    this.state = {
      board: this.createBoard(),
      flipped: false
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
                    className={`space ${space.color} ${
                      space.sameAs(this.props.highlighted) ? "highlighted" : ""
                    }`}
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

  createSpace = (i: number): Space => {
    const f = false;
    return new Space(file(i, f), rank(i, f), color(i, f));
  };

  onClickSpace = (space: Space) => {
    this.props.chooseSpace(space);
  };
}

export default ChessBoard;
