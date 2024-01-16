import { forwardRef, useEffect } from "react";
import Result from "./Result";

const ResultsBox = forwardRef(function ResultsBox(props, ref) {
  const {
    query,
    searchResults,
    setSearchResults,
    usersList,
    setUsersList,
    setChips,
    selectedItem,
    onSelect,
    inputRef,
  } = props;
  useEffect(() => {
    const filteredResults = usersList.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [query, usersList, setSearchResults]);

  return (
    <div
      className="w-96 shadow-2xl rounded-sm absolute mt-2 ml-2 max-h-64 overflow-y-auto bg-white"
      ref={ref}
    >
      {searchResults?.map((user, i) => (
        <Result
          user={user}
          key={user.id}
          {...{ setChips, setUsersList, onSelect, inputRef }}
          isActive={i === selectedItem}
        />
      ))}
    </div>
  );
});

export default ResultsBox;
