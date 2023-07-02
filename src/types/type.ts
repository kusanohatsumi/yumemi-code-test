export type Prefectures = {
  prefCode: number;
  prefName: string;
};
export type SpotPrefectures = {
  id: number;
  name: string;
};

export type Population = {
  id: number;
  data: { year: number; value: number };
};
export type SpotPopulation = {
  id: number;
  data: { year: number; value: number };
};
