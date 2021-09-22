import React, { useEffect, useState } from 'react';
import { Background } from '../../assets/Background';
import Numbers from '../../components/Numbers';
import { loterias, loteriasConcurso } from '../../requests';
import styles from './homePage.module.scss';

type itemMapPattern = {
  __typename: string;
  id: number;
  nome: string;
};

const HomePage: React.FC = () => {
  const [lotery, setlotery] = useState<any>();
  const [concurse, setConcurse] = useState<any>();
  const [id, setId] = useState<number>();

  async function getRequests() {
    const data = await loterias();
    const concurses = await loteriasConcurso();
    setlotery(data);
    setConcurse(concurses);
  }

  useEffect(() => {
    getRequests();
    console.log(id);
  }, [id]);

  const getConcurseId = async (name: string): Promise<void> => {
    let loteryId: number = 0;

    await lotery.filter((item: itemMapPattern) => {
      if (item.nome === name) {
        loteryId = item.id;
        concurse.filter((item: any) => {
          if (item.loteriaId === loteryId) {
            setId(item.concursoId);
          }
        });
        return true;
      }
      return false;
    });
  };

  return (
    <>
      <Background fill="#6befa3" />
      <div className={styles.root}>
        <div className={styles.leftSide}>
          <div>
            <label>
              <select
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
            <span>mega-sena</span>
          </div>

          <div>
            <h4>Concurso</h4>
            {/* {concurse && concurse.filter((item) => {
              if()
            })} */}
          </div>
        </div>

        <div className={styles.rigthSide}>
          <div className={styles.rightSideContainer}>
            <div style={{ flex: 1 }} />
            <section className={styles.numbersSection}>
              <Numbers />
              <Numbers />
              <Numbers />
              <Numbers />
              <Numbers />
              <Numbers />
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
