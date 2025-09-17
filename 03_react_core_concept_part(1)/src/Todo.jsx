// export default function ToDo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone === true) {
//     return (
//       <li>
//         Done: {task} Duration: {time}
//       </li>
//     );
//   }
//   return <li>To be done: {task}</li>;
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       Done: {task} Duration: {time}
//     </li>
//   ) : (
//     <li>Not Done: {task}</li>
//   );
// }

// conditional rendaring --> &&
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done Task: {task} Duration: {time}
//       </li>
//     )
//   );
// }

// conditional rendaring -->> ||
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone || (
//       <li>
//         Not Done Task: {task} Duration: {time}
//       </li>
//     )
//   );
// }

export default function ToDo({ task, isDone, time = 0 }) {
  // const displayTime = time ? time : (time = "100");
  let listItem;
  if (isDone === true) {
    listItem = (
      <li>
        Done: {task} Duration: {time ? (time = "I am done.") : "not done yet"}
      </li>
    );
  } else {
    listItem = <li>Pending: {task}</li>;
  }
  return listItem;
}
