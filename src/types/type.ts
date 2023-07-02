export type Prefectures = {
  prefCode: number;
  prefName: string;
};
export type SpotPrefectures = {
  id: number;
  name: string;
};

export type Population = {
  // data: { year: number; value: number };
  year: number;
  value: number;
};
export type SpotPopulation = {
  prefName: string;
  data: { year: number; value: number };
};
