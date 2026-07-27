"use client";

// export default function Home() {
//   return <h1>Hello React</h1>;
// }

// export default function Home() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <p>I am learning JSX</p>
//     </div>
//   );
// }

// export default function Home() {
//   const name = "Aida";
//   const taskCount = 3;

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>You have {taskCount} tasks</p>
//       <p>Tomorrow you will have {taskCount + 1}</p>
//       <p>Your name has {name.length} letters</p>
//     </div>
//   );
// }

// export default function Home() {
//   const isDone = true;

//   return (
//     <div>
//       <h1 className="title">Task</h1>
//       <p style={{ color: isDone ? "green" : "red" }}>Buy bread</p>
//     </div>
//   );
// }

// export default function Home() {
//   const tasks = ["Buy bread", "Call mum", "Finish homework"];

//   return (
//     <div>
//       <h1>My tasks</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function Home() {
//   const todos = [
//     { id: 1, title: "Buy bread", done: false },
//     { id: 2, title: "Call mum", done: true },
//   ];

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {todo.done ? "☑" : "☐"} {todo.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

export default function Home() {
  const todos = [
    { id: 1, title: "Buy bread", done: true, color: "grey" },
    { id: 2, title: "Call mum", done: false, color: "black" },
    { id: 3, title: "Finish homework", done: true, color: "grey" },
    { id: 4, title: "Water the plants", done: false, color: "black" },
  ];
  const taskCount = todos.length;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ color: todo.color }}>
          {todo.done ? "☑" : "☐"} {todo.title}
        </li>
      ))}
      <p>You have {taskCount} tasks</p>
    </ul>
  );
}
