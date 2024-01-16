export function handleUserSelection(selectedUser, setChips, setResults) {
  // add to chips list
  setChips((prev) => [...prev, selectedUser]);
  // remove  user from users list
  setResults((prev) => prev.filter((user) => user.id !== selectedUser.id));
}
