import { create } from "zustand";

interface ILoto {
  totalNumbers: number;
  total: number;
  setTotal: () => void;
  selectedNumbers: number[];
  totalNumberSelected: number;
  games: number[][];
  handleSelectNumber: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleTotalNumberChoise: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleResetSelectedNumber: () => void;
  handleAddGame: () => void;
  handleDeleteGame: (selectedGame: number[]) => void;
}

const relations: { [k: number]: number } = {
  15: 3,
  16: 48,
  17: 408,
  18: 2448,
  19: 11628,
  20: 46512,
};

const calcGameValue = (games: Array<number>[]) => {
  const a = games.reduceRight((_prev, cur) => {
    return relations[cur.length];
  }, 0);
  return a;
};

export const useLoto = create<ILoto>((set, get) => ({
  totalNumbers: 25,
  selectedNumbers: [],
  totalNumberSelected: 15,
  games: [],
  total: 0,
  setTotal: () => {
    if (get().games.length > 0) {
      set((state) => ({
        total: state.total + calcGameValue(get().games),
      }));
    }
  },
  handleSelectNumber: (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    if (
      !get().selectedNumbers.includes(Number(button.value)) &&
      get().selectedNumbers.length < get().totalNumberSelected
    ) {
      set((state) => ({
        selectedNumbers: [
          ...state.selectedNumbers,
          Number(button.value),
        ] as number[],
      }));
    }
  },
  handleTotalNumberChoise: (event: React.ChangeEvent<HTMLSelectElement>) => {
    set(() => ({
      totalNumberSelected: Number(event.target.value),
    }));
  },
  handleResetSelectedNumber: () => {
    set(() => ({
      selectedNumbers: [],
    }));
  },
  handleAddGame: () => {
    if (
      !get().games.includes(get().selectedNumbers) &&
      get().selectedNumbers.length !== 0 &&
      get().selectedNumbers.length >= get().totalNumberSelected
    ) {
      set((state) => ({
        games: [...state.games, get().selectedNumbers],
      }));
    }
    get().setTotal();
  },
  handleDeleteGame: (selectedGame: number[]) => {
    set((state) => ({
      games: get().games.filter((game) => !game.includes(selectedGame))
    })
  },
}));
