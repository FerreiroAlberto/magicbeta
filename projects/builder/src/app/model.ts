export interface MtgApi {
  cards: MtgCard[];
}

export interface MtgCard {
  imageUrl: string;
  name: string;
  manaCost: string;
  cmc: number;
  types: string;
  text: string;
  flavor: string;
  setName: string;
  rarity: string;
  number: string;
  artist: string;
  isFavorite: boolean;
}
