import { use } from "react";
import Friend from "./Friend";

export default function Friends({ freindsPromise }) {
  const friends = use(freindsPromise);

  return (
    <div>
      <h3>Friend: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
