import { useState } from "react";
import InputField from "../../molecules/InputField/InputField";
import SubmitButton from "../../molecules/Button/SubmitButton";
import ToDoList from "../ToDolistWrapper/ToDoList";
import Button from "../../molecules/Button/Button";

export default function Form() {
  const [toDoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  const addTodo = () => {
    if (toDoInput) {
      setTodos([...todos, { id: todos.length + 1, task: toDoInput, completed: false}]);
      setToDoInput("");
    } else {
      alert("Please enter a task");
    }
  };

  const handleChange = (event: any) => {
    setToDoInput(event.currentTarget.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addTodo();
  };

  return (
    <>
    <h1>To Do App</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Please Enter Your task"
          name="task"
          id="task"
          value={toDoInput}
          onchange={handleChange}
        />
        <SubmitButton text="Add task" type="submit" />
        <Button type="reset" text="Clear All" onClick={() => setTodos([])} />
        <Button type="button" text="Clear Completed" onClick={() => setTodos(todos.filter((todo) => !todo.completed))} />
      </form>
      <ToDoList toDoList={todos} setTodos={setTodos} />
    </>
  );
}
