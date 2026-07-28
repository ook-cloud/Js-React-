"use client";

export default function Home() {
  const todo = [
    { id: 1, title: "Buy bread", done: true },
    { id: 2, title: "Call mum", done: false },
    { id: 3, title: "Finish homework", done: true },
    { id: 4, title: "Water the plants", done: false },
  ];
  const taskCount = todo.length;

  return (
    <>
      <ul>
        {todo.map((item) => (
          <li key={item.id} style={{ color: item.done ? "grey" : "black" }}>
            {item.done ? "☑" : "☐"} {item.title}
          </li>
        ))}
      </ul>
      <p>You have {taskCount} tasks</p>
    </>
  );
}
