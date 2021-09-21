import React, { useEffect, useState } from 'react';
import { Background } from '../../assets/Background';
import Numbers from '../../components/Numbers';
import { loterias } from '../../requests';
import styles from './homePage.module.scss';

type itemMapPattern = {
  __typename: string;
  id: number;
  nome: number;
};

const HomePage: React.FC = () => {
  const [lotery, setlotery] = useState<any>();
  async function getLotery() {
    const data = await loterias();
    setlotery(data);
  }

  useEffect(() => {
    getLotery();
  }, []);
  console.log(lotery);
  return (
    <>
      <Background fill="#6befa3" />
      <div className={styles.root}>
        <div className={styles.leftSide}>
          <div>
            <label>
              <select>
                <option></option>
                {lotery &&
                  lotery.map(
                    (
                      _item: itemMapPattern,
                      index: React.Key | null | undefined,
                    ) => {
                      return <option key={index}>{_item.nome}</option>;
                    },
                  )}
              </select>
            </label>
          </div>
          <div>
            <span>mega-sena</span>
          </div>

          <div>
            <h4>Concurso</h4>
            <h5>4531 - 07/04/2020</h5>
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
