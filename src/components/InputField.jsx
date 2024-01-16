import { useEffect, useRef, useState } from "react";
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
  const [highlightElement, setHighlightElement] = useState(null);
  const backSpaceCounter = useRef(0);
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  function handleKeyBoardNavigation(e) {
    console.log(e.key);
    if (e.key === "ArrowDown") {
      setSelectedItem((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setSelectedItem((prev) =>
        prev > 0 ? prev - 1 : searchResults.length - 1
      );
    } else if (e.key === "Enter" && selectedItem > -1) {
      const selectedUser = searchResults.find((_, i) => i === selectedItem);
      handleUserSelection(selectedUser, setChips, setUsersList);
      resetOnSelect();
    } else if (e.key === "Backspace" && searchQuery.length === 0) {
      backSpaceCounter.current++;
      if (backSpaceCounter.current === 1) {
        setHighlightElement(chips.length - 1);
      } else if (backSpaceCounter.current === 2) {
        const deletedUser = chips[chips.length - 1];
        setChips((prev) => prev.slice(0, -1));
        setUsersList((prev) => [...prev, deletedUser]);
        resetChipHighlight();
      }
    }
  }

  function resetChipHighlight() {
    setHighlightElement(null);
    backSpaceCounter.current = 0;
  }

  function resetOnSelect() {
    setSearchQuery("");
    setSelectedItem(-1);

    resetChipHighlight();
  }

  function ensureVisible(index) {
    const resultsBox = boxRef.current;
    if (!resultsBox) return;

    const results = resultsBox.children;
    if (index < 0 || index >= results.length) return;

    const selectedUser = results[index];

    if (selectedUser.offsetTop < resultsBox.scrollTop) {
      resultsBox.scrollTop = selectedUser.offsetTop;
    } else if (
      selectedUser.offsetTop + selectedUser.offsetHeight >
      resultsBox.scrollTop + resultsBox.offsetHeight
    ) {
      resultsBox.scrollTop = selectedUser.offsetTop + selectedUser.offsetHeight;
    }
  }

  function handleRemoveChip(user) {
    setChips((prev) => prev.filter((chip) => chip.id !== user.id));
    setUsersList((prev) => [...prev, user]);
    setHighlightElement(null);
    backSpaceCounter.current = 0;
  }

  useEffect(() => {
    ensureVisible(selectedItem);
  }, [selectedItem]);

  return (
    <div className="w-3/5 border-b-4 border-blue-500 pb-2">
      <div className="flex flex-wrap gap-2 items-center">
        {chips?.map((chip, i) => (
          <Chip
            key={chip.id}
            {...chip}
            onRemove={() => handleRemoveChip(chip)}
            isHighLight={highlightElement === i}
          />
        ))}
        <div className="relative">
          <input
            type="text"
            className="outline-none"
            onFocus={() => setDisplayBox(true)}
            value={searchQuery}
            placeholder="Add new user..."
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyBoardNavigation}
            ref={inputRef}
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
              ref={boxRef}
              onSelect={() => resetOnSelect()}
              inputRef={inputRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default InputField;
