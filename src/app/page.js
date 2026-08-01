"use client";

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Create PR", completed: true },
    { id: 2, text: "Design Todo app", completed: false },
  ]);
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const handleAddTodo = () => {
    if (!inputText.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
    setInputText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "Active") return !todo.completed;
    if (activeTab === "Completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <main className="Background">
      <div className="container">
        <div className="card">
          <h1 className="card-title">To-Do list</h1>

          {/* Input Wrapper */}
          <div className="input-wrapper">
            <input
              type="text"
              className="hero-input"
              placeholder="Add a new todo..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            />
            <button className="btn-add" onClick={handleAddTodo}>
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

          {/* List Container */}
          <div className="todo-container">
            {filteredTodos.map((todo) => (
              <div key={todo.id} className="todo-card">
                <div className="todo-content">
                  <div
                    className={`custom-checkbox ${
                      todo.completed ? "" : "unchecked"
                    }`}
                    onClick={() => toggleTodo(todo.id)}
                  >
                    {todo.completed && (
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
                    className={`todo-label ${todo.completed ? "completed" : ""}`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Card Footer */}
          <div className="card-footer">
            <span>
              {completedCount} of {todos.length} todos completed
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
