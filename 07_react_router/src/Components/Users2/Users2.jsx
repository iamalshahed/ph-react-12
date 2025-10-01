import React, { use } from "react";

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);
  console.log(users);

  return (
    <div>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </div>
  );
};

export default Users2;
