import { useEffect, useState } from "react";
import Result from "./Result";
import { users } from "../data/users";

function ResultsBox({ query, onSelect }) {
  const [results, setResults] = useState(users);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const filteredResults = results.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filteredResults);
  }, [query, results]);

  return (
    <div className="w-96 shadow-lg rounded-sm absolute mt-2">
      {filteredResults?.map((user) => (
        <Result user={user} key={user.id} {...{ onSelect, setResults }} />
      ))}
    </div>
  );
}

export default ResultsBox;
