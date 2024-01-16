import { forwardRef, useEffect } from "react";
import Result from "./Result";
import PropTypes from "prop-types";

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
      className="w-[450px] shadow-2xl rounded-sm absolute mt-2 ml-2 max-h-80 overflow-y-auto bg-white"
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

ResultsBox.propTypes = {
  query: PropTypes.string,
  searchResults: PropTypes.array,
  setSearchResults: PropTypes.func,
  usersList: PropTypes.array,
  setUsersList: PropTypes.func,
  setChips: PropTypes.func,
  selectedItem: PropTypes.number,
  onSelect: PropTypes.func,
  inputRef: PropTypes.object,
};

export default ResultsBox;
