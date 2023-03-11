import PropTypes from "prop-types";

import CounterView from "../../../../commonComponents/CounterView";

import styles from "./styles.module.scss";

const Layout = ({
  counters,
  handleAddCounter,
  handleRemoveCounter,
  handleResetCounters,
  handleIncrement,
  handleDecrement,
  handleReset,
  totalSum,
}) => {
  const averageValue = totalSum === 0 ? 0 : totalSum / counters.length;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>Counters</h1>
      <div className={styles.buttons}>
        <button className={styles.btn_add} onClick={handleAddCounter}>
          Add Counter
        </button>
        <button className={styles.btn_add} onClick={handleResetCounters}>
          Reset
        </button>
      </div>
      <p className={styles.info}>Counters Amount: {counters.length}</p>
      <p className={styles.info}>Counters Value Sum: {totalSum}</p>
      <p className={styles.info}>Average Counters Value: {averageValue}</p>

      <div className={styles.list}>
        {counters.map(({ countValue, id }) => (
          <CounterView
            counterValue={countValue}
            key={id}
            onDelete={handleRemoveCounter}
            id={id}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
    }).isRequired
  ).isRequired,
  handleAddCounter: PropTypes.func,
  handleRemoveCounter: PropTypes.func,
  handleResetCounters: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Layout;
