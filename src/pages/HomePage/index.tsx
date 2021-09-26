import {
  FormControl,
  CircularProgress,
  MenuItem,
  Select,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import Numbers from '../../components/Numbers';
import { concurseData, itemMapPattern } from '../../config/types';
import { concursoData, loterias, loteriasConcurso } from '../../requests';
import styles from './homePage.module.scss';

const useStyles = makeStyles({
  root: {},
  loading: {
    gridColumn: '3',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
  },
});

const HomePage: React.FC = () => {
  const [lotery, setlotery] = useState<any>();
  const [concurse, setConcurse] = useState<any>();
  const [concurseId, setConcurseId] = useState<number>(2359);
  const [concurseName, setConcurseName] = useState<string>('mega-sena');
  const [concurseData, setConcurseData] = useState<concurseData>();
  const classes = useStyles();

  async function getRequests() {
    const data = await loterias();
    const concurses = await loteriasConcurso();
    const concurseData = await concursoData(concurseId);
    setConcurseData(concurseData);
    setlotery(data);
    setConcurse(concurses);
  }

  const formatData = (data: string) => {
    return format(parseISO(data), 'dd/MM/yyyy');
  };
  useEffect(() => {
    getRequests();
  }, [concurseId, concurseData, concurseName]);

  const getConcurseId = async (name: string): Promise<void> => {
    let loteryId: number = 0;
    setConcurseName(name);
    await lotery.filter((item: itemMapPattern) => {
      if (item.nome === name) {
        loteryId = item.id;
        concurse.filter((item: any) => {
          if (item.loteriaId === loteryId) {
            setConcurseId(item.concursoId);
          }
        });
        return true;
      }
      return false;
    });
  };

  return (
    <>
      <div className={styles.root}>
        <div style={{ position: 'relative' }}>
          <Background name={concurseName} />
          <div className={styles.leftSide}>
            <div>
              <FormControl
                variant="outlined"
                color="primary"
                sx={{ m: 1, minWidth: 120 }}
                size="medium"
                style={{ background: 'white' }}
              >
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  style={{ textTransform: 'capitalize' }}
                  label="Loteria"
                  onChange={(e: { target: { value: string } }) => {
                    getConcurseId(e.target.value);
                  }}
                  value={concurseName}
                >
                  {lotery ? (
                    lotery.map((item: itemMapPattern) => {
                      return (
                        <MenuItem
                          key={item.id}
                          value={item.nome}
                          style={{
                            textTransform: 'capitalize',
                          }}
                        >
                          {item.nome}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem>Carregando...</MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>

            <div>
              <h1
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {concurseName ? concurseName : 'Carregando...'}
              </h1>
            </div>

            <div>
              <h4>Concurso</h4>
              <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                {concurseId} -{' '}
                {concurseData?.data && formatData(concurseData.data)}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.rigthSide}>
          <div className={styles.rightSideContainer}>
            <div />
            <section className={styles.numbersSection}>
              <div className={styles.numbersAlign}>
                {concurseData ? (
                  concurseData.numeros.map((loteryNumber, index) => {
                    return <Numbers key={index}>{loteryNumber}</Numbers>;
                  })
                ) : (
                  <CircularProgress className={classes.loading} size="md" />
                )}
              </div>
            </section>

            <footer className={styles.footer}>
              <p>
                Este sorteio é meramente ilustrativo e não possui nenhuma
                ligação com a CAIXA
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
