export type concurseData = {
  __typename: string;
  id: string;
  loteria: number;
  numeros: string[];
  data: string;
};

export type concurso = {
  concurso: concurseData;
};

export type itemMapPattern = {
  __typename: string;
  id: number;
  nome: string;
};
