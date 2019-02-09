import Space from "../components/space";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

const file = (i: number): string => {
  return FILES[i % 8];
};

const rank = (i: number): number => 8 - Math.floor(i / 8);

const color = (i: number): string => {
  if (rank(i) % 2 === 0) {
    return i % 2 === 0 ? "black" : "white";
  } else {
    return i % 2 === 0 ? "white" : "black";
  }
};

const randomSpace = (): Space => {
  const i = Math.floor(Math.random() * 64);
  return new Space(file(i), rank(i), color(i));
};

export { color, file, rank, randomSpace };
