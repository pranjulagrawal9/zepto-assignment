import { useEffect, useState } from "react";
import Result from "./Result";
import { users } from "../data/users";

function ResultsBox({ query }) {
  const [foundUsers, setFoundUsers] = useState([]);

  useEffect(() => {
    const foundUsers = users?.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoundUsers(foundUsers);
  }, [query]);

  return (
    <div className="w-96 shadow-lg rounded-sm absolute mt-2">
      {foundUsers?.map((user) => (
        <Result user={user} key={user.id} />
      ))}
    </div>
  );
}

export default ResultsBox;
