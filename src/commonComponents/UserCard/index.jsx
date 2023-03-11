import PropTypes from "prop-types";
import { memo } from "react";
import styles from "./styles.module.scss";

const UserCard = ({ id, age, name, isBlocked, onBlock, onDelete }) => {
  return (
    <div
      className={styles.item}
      style={{ background: isBlocked ? "red" : "white" }}
    >
      <div className={styles.name}>Name: {name}</div>
      <div className={styles.age}>Age: {age}</div>
      <div className={styles.id}>Id: {id}</div>

      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className={styles.btn} onClick={() => onBlock(id)}>
        Block
      </button>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  id: PropTypes.string,
  isBlocked: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onBlock: PropTypes.func,
};

export default memo(UserCard);
