import { use } from "react";
import TaskTwoUser from "./TaskTwoUser";

export default function TaskTwo({ fetchUsersPromise }) {
  const users = use(fetchUsersPromise);

  return (
    <div>
      <h1>Users: {users.length}</h1>

      {users.map((user) => (
        <TaskTwoUser key={user.id} user={user}></TaskTwoUser>
      ))}
    </div>
  );
}
