import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import { random } from "lodash";

import Layout from "../components/Layout";
import { calcAverage } from "../utils/calcAverage";

const ListsContainer = () => {
  const [users, setUsers] = useState([]);

  const averageUsersAge = calcAverage(users);

  const handleAddUser = useCallback(() => {
    const newUser = {
      name: "Tom",
      age: random(14, 75, false),
      id: uuid(),
      isBlocked: false,
    };

    setUsers((state) => [...state, newUser]);
  }, []);

  const handleRemove = useCallback((id) => {
    setUsers((state) => {
      const usersCopy = structuredClone(state);
      const userIndex = usersCopy.findIndex((user) => user.id === id);
      usersCopy.splice(userIndex, 1);

      return usersCopy;
    });
  }, []);

  const handleBlockUser = useCallback((id) => {
    setUsers((state) => {
      const usersCopy = structuredClone(state);
      const foundUser = usersCopy.find((user) => user.id === id);
      foundUser.isBlocked = true;

      return usersCopy;
    });
  }, []);

  return (
    <Layout
      users={users}
      handleAddUser={handleAddUser}
      handleRemove={handleRemove}
      handleBlockUser={handleBlockUser}
      averageUsersAge={averageUsersAge}
    />
  );
};

export default ListsContainer;
