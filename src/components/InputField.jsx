import { useState } from "react";
import Chip from "./Chip";
import ResultsBox from "./ResultsBox";

function InputField() {
  const [chips, setChips] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayBox, setDisplayBox] = useState(false);

  function handleChipsChange(user) {
    setChips((prev) => [...prev, user]);
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
          />
          {displayBox && (
            <ResultsBox query={searchQuery} onSelect={handleChipsChange} />
          )}
        </div>
      </div>
    </div>
  );
}

export default InputField;
