export const calcAverage = (users) => {
  const usersAmount = users.length;
  if (usersAmount === 0) {
    return 0;
  }
  return users.reduce((result, { age }) => result + age, 0) / usersAmount;
};
