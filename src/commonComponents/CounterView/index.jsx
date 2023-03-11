import PropTypes from "prop-types";
import { memo } from "react";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  id,
  onDelete,
}) => {
  const isEvenValue = counterValue % 2 === 0;
  const isDisabled = counterValue === 0;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEvenValue ? "green" : "red" }}
    >
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.display}>
        {isEvenValue ? "Четное" : "Нечетное"}
      </div>
      {id && <div className={styles.display}>{id}</div>}

      <div className={styles.controlButtons}>
        <button
          className={styles.controlButton}
          onClick={() => handleDecrement(id)}
          disabled={isDisabled}
        >
          -
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleReset(id)}
        >
          Reset
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleIncrement(id)}
        >
          +
        </button>
        {onDelete && (
          <button className={styles.controlButton} onClick={() => onDelete(id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default memo(CounterView);
