import PropTypes from "prop-types";

import UserCard from "../../../../commonComponents/UserCard";

import styles from "./styles.module.scss";

const Layout = ({
  users,
  handleAddUser,
  handleRemove,
  handleBlockUser,
  averageUsersAge,
}) => {
  return (
    <div>
      <h1>Lists</h1>
      <div>Average age: {averageUsersAge}</div>
      <button className={styles.btn_add} onClick={handleAddUser}>
        Add User
      </button>

      <div>
        {users.map(({ name, age, id, isBlocked }) => (
          <UserCard
            key={id}
            name={name}
            age={age}
            id={id}
            isBlocked={isBlocked}
            onDelete={handleRemove}
            onBlock={handleBlockUser}
          />
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      isBlocked: PropTypes.bool.isRequired,
    })
  ),
};

export default Layout;
