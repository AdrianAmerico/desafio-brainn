import React from 'react';
import Numbers from '../../components/Numbers';
import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <div>
          <label>
            <select>
              <option>Mega-sena</option>
            </select>
          </label>

          <span>mega-sena</span>
        </div>

        <div>
          <h4>Concurso</h4>
          <h5>4531 - 07/04/2020</h5>
        </div>
      </div>

      <div className={styles.rigthSide}>
        <div>
          <Numbers />
          <Numbers />
          <Numbers />
          <Numbers />
          <Numbers />
          <Numbers />
        </div>
        <div>
          <span>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
