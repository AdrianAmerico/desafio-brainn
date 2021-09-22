import { client } from '../config/client-graphql';
import { ApolloQueryResult, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { concurso } from '../config/types';

export const loterias = async () => {
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

export const concursoData = async (id: number) => {
  try {
    const result: ApolloQueryResult<concurso> = await client.query({
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
