import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Background } from '../../assets/Background';
import Numbers from '../../components/Numbers';
import { concurseData, itemMapPattern } from '../../config/types';
import { concursoData, loterias, loteriasConcurso } from '../../requests';
import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  const [lotery, setlotery] = useState<any>();
  const [concurse, setConcurse] = useState<any>();
  const [concurseId, setConcurseId] = useState<number>(2359);
  const [concurseName, setConcurseName] = useState<string>('mega-sena');
  const [concurseData, setConcurseData] = useState<concurseData>();

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
  }, [concurseId, concurseData]);

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
      <Background name={concurseName} />
      <div className={styles.root}>
        <div className={styles.leftSide}>
          <div>
            <label>
              <select
                style={{ textTransform: 'capitalize' }}
                onChange={(e) => {
                  getConcurseId(e.target.value);
                }}
              >
                {lotery ? (
                  lotery.map((item: itemMapPattern) => {
                    return <option key={item.id}>{item.nome}</option>;
                  })
                ) : (
                  <option>Carregando...</option>
                )}
              </select>
            </label>
          </div>
          <div>
            <h1 style={{ textTransform: 'capitalize' }}>
              {concurseName ? concurseName : 'Carregando...'}
            </h1>
          </div>

          <div>
            <h4>Concurso</h4>
            <span>
              {concurseId} -{' '}
              {concurseData?.data && formatData(concurseData.data)}
            </span>
          </div>
        </div>

        <div className={styles.rigthSide}>
          <div className={styles.rightSideContainer}>
            <div style={{ flex: 1 }} />
            <section className={styles.numbersSection}>
              {concurseData?.numeros.map((loteryNumber, index) => {
                return <Numbers key={index}>{loteryNumber}</Numbers>;
              })}
            </section>
            <div className={styles.footer}>
              <span>
                Este sorteio é meramente ilustrativo e não possui nenhuma
                ligação com a CAIXA
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
