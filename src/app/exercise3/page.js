export const todos = [
  { id: 1, title: "Buy bread", done: false, priority: "high" },
  { id: 2, title: "Call mum", done: true, priority: "low" },
  { id: 3, title: "Finish homework", done: false, priority: "normal" },
  { id: 4, title: "Water the plants", done: true, priority: "normal" },
  { id: 5, title: "Read 10 pages", done: false, priority: "high" },
];

export function countDone(list) {
  return list.filter((todo) => todo.done).length;
}

export function countLeft(list) {
  return list.length - countDone(list);
}

export function summary(list) {
  const total = list.length;
  const done = countDone(list);
  const left = countLeft(list);
  return `${total} tasks · ${done} done · ${left} left`;
}

export function priorityIcon(todo) {
  if (todo.priority === "high") {
    return "🔴";
  }
  if (todo.priority === "normal") {
    return "🟡";
  }
  if (todo.priority === "low") {
    return "⚪";
  }
}

export function formatTitle(todo) {
  return todo.done ? `☑ ${todo.title}` : `☐ ${todo.title}`;
}

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My to-dos</h1>
      <p>{summary(todos)}</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "8px" }}>
            {priorityIcon(todo)} {formatTitle(todo)}
          </li>
        ))}
      </ul>
    </div>
  );
}
