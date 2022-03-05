import React, { useState } from "react";
const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add A Todo"
        value={input}
        name="text"
        className="input"
        onChange={handleChange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
