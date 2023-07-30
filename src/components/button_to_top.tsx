import styles from './button.module.css';

const Button = () => {
  return (
    <div>
      <button className={styles.btn}>
        <div className={styles.triangle} />
      </button>
      ;
    </div>
  );
};

export default Button;
