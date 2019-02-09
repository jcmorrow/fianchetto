class Space {
  rank: number;
  file: string;
  color: string;

  constructor(file: string, rank: number, color: string) {
    this.file = file;
    this.rank = rank;
    this.color = color;
  }

  sameAs = (space: Space | null): boolean => {
    if (space === null) {
      return false;
    }
    return space.rank === this.rank && space.file === this.file;
  };
}

export default Space;
