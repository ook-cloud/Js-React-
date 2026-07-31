"use client";

import { useState } from "react";

export default function Todo() {
  const [state, setState] = useState("All");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleActiveButtonClick = () => {
    setState("Active");
  };
  const handleCompleteButtonClick = () => {
    setState("Complete");
  };
  const handleAllButton = () => {
    setState("All");
  };
  const handleAdButton = () => {
    if (inputValue === "") {
      setErrorMessage("Please enter todo");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: inputValue,
      status: "Active",
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    setErrorMessage("");
  };

  const handleTodoStatusChange = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "Complete", isDone: true };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodo);
  };

  const activeTodos = todos.filter((todo) => {
    return todo.status === "Active";
  });

  const completeTodos = todos.filter((todo) => {
    return todo.status === "Complete";
  });

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <input
        onChange={handleInputChange}
        placeholder="Add new task"
        value={inputValue}
      />
      {errorMessage !== "" && (
        <div style={{ color: "red" }}>{errorMessage}</div>
      )}
      <button onclick={handleAdButton}>Add</button>
      <div>
        <button onclick={handleAllButton}>All</button>
        <button onclick={handleActiveButtonClick}>Active</button>
        <button onclick={handleCompleteButtonClick}>Complete</button>
      </div>
      {state === "All" && (
        <div>
          {todos.map((todo) => {
            return <div key={todo.id}>{todo.title}</div>;
          })}
        </div>
      )}
      {state === "Active" && (
        <div>
          {todos.map((todo) => {
            return <button key={todo.id}>{todo.title}</button>;
          })}
        </div>
      )}
      {state === "Complete" && (
        <div>
          {todos.map((todo) => {
            return <div key={todo.id}>{todo.title}</div>;
          })}
        </div>
      )}
    </div>
  );
}

// const handleAddTask = (err) => {
//   err.preventDefault();
//   if (!inputValue.trim()) return;
//   setTasks([
//     ...tasks,
//     { id: Date.now(), text: inputValue.trim(), completed: false },
//   ]);
//   setInputValue("");
// };

// const toggleTask = (id) => {
//   setTasks(
//     tasks.map((task) =>
//       task.id === id ? { ...task, completed: !task.completed } : task,
//     ),
//   );
// };

// const clearCompleted = () => {
//   setTasks(tasks.filter((task) => !task.completed));
// };

// const filteredTasks = tasks.filter((task) => {
//   if (filter === "Active") return !task.completed;
//   if (filter === "Completed") return task.completed;
//   return true;
// });

// const completedCount = tasks.filter((t) => t.completed).length;

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5">
//         <h1 className="text-xl font-bold text-center text-gray-900">
//           To-Do list
//         </h1>

//         <form onSubmit={handleAddTask} className="flex gap-2">
//           <input
//             type="text"
//             placeholder="Add a new task..."
//             value={inputValue}
//             onChange={(err) => setInputValue(err.target.value)}
//             className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 transition-colors"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-lg transition-colors"
//           >
//             Add
//           </button>
//         </form>

//         <div className="flex gap-2">
//           {["All", "Active", "Completed"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setFilter(tab)}
//               className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
//                 filter === tab
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="min-h-[120px] flex flex-col gap-2">
//           {filteredTasks.length === 0 ? (
//             <div className="flex items-center justify-center h-28 text-gray-400 text-sm">
//               No tasks yet. Add one above!
//             </div>
//           ) : (
//             filteredTasks.map((task) => (
//               <div
//                 key={task.id}
//                 className="flex items-center justify-between p-3 bg-gray-50/80 rounded-xl group hover:bg-gray-100/80 transition-colors"
//               >
//                 <label className="flex items-center gap-3 cursor-pointer flex-1">
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => toggleTask(task.id)}
//                     className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
//                   />
//                   <span
//                     className={`text-sm ${
//                       task.completed
//                         ? "line-through text-gray-400"
//                         : "text-gray-800 font-medium"
//                     }`}
//                   >
//                     {task.text}
//                   </span>
//                 </label>

//                 {}
//                 {task.completed && (
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="px-2.5 py-1 text-xs text-red-500 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         {tasks.length > 0 && (
//           <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
//             <span>
//               {completedCount} of {tasks.length} tasks completed
//             </span>
//             {completedCount > 0 && (
//               <button
//                 onClick={clearCompleted}
//                 className="text-red-500 hover:underline font-medium"
//               >
//                 Clear completed
//               </button>
//             )}
//           </div>
//         )}

//         <div className="text-center text-xs text-gray-400 pt-2">
//           Powered by{" "}
//           <a href="#" className="text-blue-500 hover:underline font-medium">
//             Pinecone academy
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
