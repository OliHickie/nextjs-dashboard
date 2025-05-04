import styles from './CustomerForce.module.scss';

const Viewings: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h2 className="global-subheading">Viewings</h2>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default Viewings;
