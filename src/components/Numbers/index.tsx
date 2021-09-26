import styles from './numbers.module.scss';

const Numbers: React.FC = (props) => {
  return (
    <div className={styles.root}>
      <span>{props.children}</span>
    </div>
  );
};

export default Numbers;
