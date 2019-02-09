import Space from "./space";

class Result {
  time: number;
  correct: boolean;
  space: Space;

  constructor(correct: boolean, space: Space, time: number) {
    this.correct = correct;
    this.space = space;
    this.time = time;
  }
}

export default Result;
