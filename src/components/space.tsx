class Space {
  rank: number;
  file: string;
  color: string;

  constructor(file: string, rank: number, color: string) {
    this.file = file;
    this.rank = rank;
    this.color = color;
  }
}

export default Space;
