export type CheckedType = {
  'v1.1': boolean;
  FT: boolean;
  'Merlin A': boolean;
  'v1.0': boolean;
  'Merlin C': boolean;
  [key: string]: boolean;
};

export type DisplayDataType = {
  type: string;
  value: number;
};

export type MonthsPayloadDataType = {
  month: string;
  value: number | null | undefined;
};
