import { useState } from "react";
import Chip from "./Chip";
import ResultsBox from "./ResultsBox";
import { users } from "../data/users";
import { handleUserSelection } from "../utils/handleUserSelection";

function InputField() {
  const [chips, setChips] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [usersList, setUsersList] = useState(users);
  const [searchResults, setSearchResults] = useState([]);
  const [displayBox, setDisplayBox] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);

  function handleKeyBoardNavigation(e) {
    if (e.key === "ArrowDown") {
      setSelectedItem((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setSelectedItem((prev) =>
        prev > 0 ? prev - 1 : searchResults.length - 1
      );
    } else if (e.key === "Enter") {
      const selectedUser = searchResults.find((_, i) => i === selectedItem);
      handleUserSelection(selectedUser, setChips, setUsersList);
      setSearchQuery("");
      setSelectedItem(-1);
    }
  }

  return (
    <div className="w-1/2 border-b-2 border-blue-500">
      <div className="flex flex-wrap gap-2">
        {chips?.map((chip) => (
          <Chip key={chip.id} {...chip} />
        ))}
        <div className="relative">
          <input
            type="text"
            className="outline-none"
            onFocus={() => setDisplayBox(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyBoardNavigation}
          />
          {displayBox && (
            <ResultsBox
              query={searchQuery}
              setChips={setChips}
              selectedItem={selectedItem}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              usersList={usersList}
              setUsersList={setUsersList}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default InputField;
