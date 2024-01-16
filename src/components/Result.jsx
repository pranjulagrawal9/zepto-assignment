import { handleUserSelection } from "../utils/handleUserSelection";

function Result({
  user,
  setChips,
  setUsersList,
  isActive,
  onSelect,
  inputRef,
}) {
  return (
    <div
      className={`flex justify-between items-center h-20 hover:bg-gray-100 px-3 cursor-pointer ${
        isActive ? "bg-gray-100" : ""
      }`}
      onClick={() => {
        handleUserSelection(user, setChips, setUsersList);
        onSelect();
        inputRef.current.focus();
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-12 rounded-full overflow-hidden">
          <img src={user?.imageUrl} alt="user-image" />
        </div>
        <p className="font-medium">{user?.name}</p>
      </div>
      <p className="opacity-50">{user?.email}</p>
    </div>
  );
}

export default Result;
