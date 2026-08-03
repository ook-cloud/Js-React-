export const todos = [
  { id: 1, title: "Buy bread", done: false, due: new Date(2026, 6, 20) },
  { id: 2, title: "Call mum", done: true, due: new Date(2026, 7, 3) },
  { id: 3, title: "Finish homework", done: false, due: new Date(2026, 8, 20) },
  { id: 4, title: "Read 10 pages", done: false, due: new Date(2026, 11, 15) },
];
export function formatTitle(todo) {
  return todo.done ? `☑ ${todo.title}` : `☐ ${todo.title}`;
}
import { formatDate, daysLeft } from 






export function summary(list) {
  const total = list.length;
  const done = countDone(list);
  const left = countLeft(list);
  return `${total} tasks · ${done} done · ${left} left`;
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
