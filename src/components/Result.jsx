function Result({ user, onSelect, setResults }) {
  function handleUserSelection() {
    onSelect(user);
    setResults((prev) => prev.filter((foundUser) => foundUser.id !== user.id));
  }

  return (
    <div
      className="flex justify-between items-center hover:bg-gray-100 px-3 py-1 cursor-pointer"
      onClick={handleUserSelection}
    >
      <div className="flex items-center gap-2">
        <div className="w-10 rounded-full overflow-hidden">
          <img src={user?.imageUrl} alt="user-image" />
        </div>
        <p>{user?.name}</p>
      </div>
      <p className="opacity-50">{user?.email}</p>
    </div>
  );
}

export default Result;
