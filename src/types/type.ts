export type Prefectures = {
  prefCode: number;
  prefName: string;
};

export type Population = {
  prefName: string;
  data: { year: number; value: number };
};
