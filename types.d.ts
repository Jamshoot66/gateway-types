export interface IExcuse {
  id: number;
  text: string;
  min_time: number;
  max_time: number;
}

export interface ITavern {
  id: number;
  title: string;
  description: string;
  longitude: string;
  latitude: string;
}

export interface ITavernResponse {
  tavern: ITavern;
  excuse: IExcuse;
}
