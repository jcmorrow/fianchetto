import Space from "../components/space";

const BOARD_SIZE = 8;
const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

const file = (i: number, flipped: boolean): string => {
  let index = i % BOARD_SIZE;
  if (flipped) {
    index = 7 - index;
  }
  return FILES[index];
};

const rank = (i: number, flipped: boolean): number => {
  if (flipped) {
    return Math.floor(i / BOARD_SIZE) + 1;
  } else {
    return BOARD_SIZE - Math.floor(i / BOARD_SIZE);
  }
};

const color = (i: number, flipped: boolean): string => {
  if (rank(i, false) % 2 === 0) {
    return i % 2 === 0 ? "white" : "black";
  } else {
    return i % 2 === 0 ? "black" : "white";
  }
};

const randomSpace = (): Space => {
  const i = Math.floor(Math.random() * 64);
  return new Space(file(i, false), rank(i, false), color(i, false));
};

export { color, file, rank, randomSpace };
