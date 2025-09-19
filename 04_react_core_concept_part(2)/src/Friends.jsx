import { use } from "react";

export default function Friends({ freindsPromise }) {
  const friends = use(freindsPromise);
  console.log(friends);

  return (
    <div>
      <h3>Friend: {friends.length}</h3>
    </div>
  );
}
