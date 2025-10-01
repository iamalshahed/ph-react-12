import React, { use } from "react";
import { Link } from "react-router";

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="">
          <p>{user.name}</p>
          <Link to={`/users-2/${user.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Users2;
