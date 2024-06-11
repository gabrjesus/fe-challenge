export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICharacterOrigin;
  location: ICharacterOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterOrigin {
  name: string;
  url: string;
}
