import { useEffect } from "react";
import Result from "./Result";

function ResultsBox({
  query,
  searchResults,
  setSearchResults,
  usersList,
  setUsersList,
  setChips,
  selectedItem,
}) {
  useEffect(() => {
    const filteredResults = usersList.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [query, usersList, setSearchResults]);

  return (
    <div className="w-96 shadow-lg rounded-sm absolute mt-2 overflow-y-auto">
      {searchResults?.map((user, i) => (
        <Result
          user={user}
          key={user.id}
          {...{ setChips, setUsersList }}
          isActive={i === selectedItem}
        />
      ))}
    </div>
  );
}

export default ResultsBox;
