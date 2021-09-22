import styles from './numbers.module.scss';

const Numbers: React.FC = (props) => {
  return <div className={styles.root}>{props.children}</div>;
};

export default Numbers;
