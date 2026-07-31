"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Create PR", completed: true },
    { id: 2, text: "Design Todo app", completed: false },
  ]);
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const handleAddTask = () => {
    if (!inputText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputText, completed: false }]);
    setInputText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "Active") return !task.completed;
    if (activeTab === "Completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <main className="hero">
      <div className="container">
        <div className="card">
          <h1 className="card-title">To-Do list</h1>

          {/* Input Wrapper */}
          <div className="input-wrapper">
            <input
              type="text"
              className="hero-input"
              placeholder="Add a new task..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            />
            <button className="btn-add" onClick={handleAddTask}>
              Add
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {["All", "Active", "Completed"].map((tab) => (
              <button
                key={tab}
                className={`tab-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Task List Container */}
          <div className="task-container">
            {filteredTasks.map((task) => (
              <div key={task.id} className="task-card">
                <div className="task-content">
                  <div
                    className={`custom-checkbox ${
                      task.completed ? "" : "unchecked"
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed && (
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5L4.84615 9.5L13 1.5"
                          stroke="white"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`task-label ${task.completed ? "completed" : ""}`}
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  className="btn-delete"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Card Footer */}
          <div className="card-footer">
            <span>
              {completedCount} of {tasks.length} tasks completed
            </span>
            <button className="btn-clear" onClick={clearCompleted}>
              Clear completed
            </button>
          </div>

          {/* Powered by */}
          <div className="powered-by">
            Powered by <a href="#!">Pinecone academy</a>
          </div>
        </div>
      </div>
    </main>
  );
}

// "use client";

// import { useState } from "react";

// export default function Todo() {
//   const [state, setState] = useState("All");
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//   };
//   const handleActiveButtonClick = () => {
//     setState("Active");
//   };
//   const handleCompleteButtonClick = () => {
//     setState("Complete");
//   };
//   const handleAllButton = () => {
//     setState("All");
//   };
//   const handleAdButton = () => {
//     if (inputValue === "") {
//       setErrorMessage("Please enter todo");
//       return;
//     }
//     const newTodo = {
//       id: Date.now(),
//       title: inputValue,
//       status: "Active",
//       isDone: false,
//     };
//     setTodos([...todos, newTodo]);
//     setInputValue("");
//     setErrorMessage("");
//   };

//   const handleTodoStatusChange = (id) => {
//     const updatedTodo = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, status: "Complete", isDone: true };
//       } else {
//         return todo;
//       }
//     });
//     setTodos(updatedTodo);
//   };

//   const activeTodos = todos.filter((todo) => {
//     return todo.status === "Active";
//   });

//   const completeTodos = todos.filter((todo) => {
//     return todo.status === "Complete";
//   });

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="container">
//       <input
//         onChange={handleInputChange}
//         placeholder="Add new task"
//         value={inputValue}
//       />
//       {errorMessage !== "" && (
//         <div style={{ color: "red" }}>{errorMessage}</div>
//       )}
//       <button onclick={handleAdButton}>Add</button>
//       <div>
//         <button onclick={handleAllButton}>All</button>
//         <button onclick={handleActiveButtonClick}>Active</button>
//         <button onclick={handleCompleteButtonClick}>Complete</button>
//       </div>
//       {state === "All" && (
//         <div>
//           {todos.map((todo) => {
//             return <div key={todo.id}>{todo.title}</div>;
//           })}
//         </div>
//       )}
//       {state === "Active" && (
//         <div>
//           {todos.map((todo) => {
//             return <button key={todo.id}>{todo.title}</button>;
//           })}
//         </div>
//       )}
//       {state === "Complete" && (
//         <div>
//           {todos.map((todo) => {
//             return <div key={todo.id}>{todo.title}</div>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
