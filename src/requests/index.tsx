import React from 'react';

class Requests {
  private URL = process.env.REACT_APP_LINK_API!;
  constructor() {}
  public loterias = async () => {
    try {

    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
  public loteriasConcurso = async () => {
    try {

    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
  public concurso = async () => {
    try {
        
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
}
