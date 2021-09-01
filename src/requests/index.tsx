import { client } from '../config/client-graphql';
import { gql } from '@apollo/client';

export const loterias = async () => {
  try {
    const result = await client.query({
      query: gql`
        query {
          loterias {
            id
            nome
          }
        }
      `,
    });
    return result.data.loterias;
  } catch (err) {
    console.log(err);
  }
};

export const loteriasConcurso = async () => {
  try {
    const result = await client.query({
      query: gql`
        query {
          loteriasConcursos {
            loteriaId
            concursoId
          }
        }
      `,
    });
    return result.data.loteriasConcursos;
  } catch (err) {
    console.log(err);
  }
};

export const concurso = async (id: number) => {
  try {
    const result = await client.query({
      query: gql`
        query {
          concurso(id: ${id}) {
            id
            loteria
            numeros
            data
          }
        }
      `,
    });
    return result.data.concurso;
  } catch (err) {
    console.log(err);
  }
};
