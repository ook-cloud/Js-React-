"use client";

import { useState } from "react";
import "./globals.css";

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
    setState("Completed");
  };

  const handleAllButton = () => {
    setState("All");
  };

  const handleAdButton = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Please enter todo");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: inputValue.trim(),
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
        const isCompleted = todo.status === "Complete";
        return {
          ...todo,
          status: isCompleted ? "Active" : "Complete",
          isDone: !isCompleted,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodo);
  };

  const activeTodos = todos.filter((todo) => todo.status === "Active");
  const completeTodos = todos.filter((todo) => todo.status === "Complete");

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => todo.status !== "Complete"));
  };

  const displayTodos =
    state === "Active"
      ? activeTodos
      : state === "Completed"
        ? completeTodos
        : todos;

  return (
    <main className="Background">
      <div className="container">
        <div className="card">
          <h1 className="card-title">To-Do list</h1>

          <div className="input-wrapper">
            <input
              className="hero-input"
              onChange={handleInputChange}
              placeholder="Add a new task..."
              value={inputValue}
              onKeyDown={(e) => e.key === "Enter" && handleAdButton()}
            />
            <button className="btn-add" onClick={handleAdButton}>
              Add
            </button>
          </div>

          {errorMessage !== "" && (
            <div className="error-message">{errorMessage}</div>
          )}

          <div className="filter-tabs">
            <button
              className={`tab-item ${state === "All" ? "active" : ""}`}
              onClick={handleAllButton}
            >
              All
            </button>
            <button
              className={`tab-item ${state === "Active" ? "active" : ""}`}
              onClick={handleActiveButtonClick}
            >
              Active
            </button>
            <button
              className={`tab-item ${state === "Completed" ? "active" : ""}`}
              onClick={handleCompleteButtonClick}
            >
              Completed
            </button>
          </div>

          <div className="todo-container">
            {displayTodos.length === 0 ? (
              <div className="empty-state">No tasks yet. Add one above!</div>
            ) : (
              displayTodos.map((todo) => (
                <div key={todo.id} className="todo-card">
                  <div className="todo-content">
                    <div
                      className={`custom-checkbox ${
                        todo.isDone ? "" : "unchecked"
                      }`}
                      onClick={() => handleTodoStatusChange(todo.id)}
                    >
                      {todo.isDone && (
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.5L4.84615 9.5L13 1.5"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    <span
                      className={`todo-label ${todo.isDone ? "completed" : ""}`}
                      onClick={() => handleTodoStatusChange(todo.id)}
                    >
                      {todo.title}
                    </span>
                  </div>

                  {todo.isDone && (
                    <button
                      className="btn-delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Статистик болон Clear товч */}
          {todos.length > 0 && (
            <div className="card-footer">
              <span>
                {completeTodos.length} of {todos.length} tasks completed
              </span>
              {completeTodos.length > 0 && (
                <button className="btn-clear" onClick={handleClearCompleted}>
                  Clear completed
                </button>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="powered-by">
            Powered by <a href="#!">Pinecone academy</a>
          </div>
        </div>
      </div>
    </main>
  );
}
