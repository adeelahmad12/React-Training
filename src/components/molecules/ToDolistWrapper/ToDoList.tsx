import Button from "../Button/Button";
import ToDoTask from "../ToDolistWrapper/ToDoTask";

export default function ToDoList({
  toDoList,
  setTodos,
}: {
  toDoList: any[];
  setTodos: any;
}) {
  const deleteTodo = (id: number) => {
    alert("Are you sure you want to delete this task?");
    const newTodoList = toDoList.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  const completeTodo = (id: number) => {
    const newTodoList = toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  const editTodo = (id: number) => {
    const newTodoList = toDoList.map((todo) => {
      if (todo.id === id) {
        const editedTask = prompt("Edit task", todo.task);
        if (editedTask) {
          return { ...todo, task: editedTask };
        }
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  return (
    <ul>
      {toDoList.map((todo) => (
        <li key={todo.id}>
          <ToDoTask todo={todo} />
          <Button type="button" text="Edit" onClick={() => editTodo(todo.id)} />
          <Button type="button" text="Delete" onClick={() => deleteTodo(todo.id)} />
          <Button type="button" text="Complete" onClick={() => completeTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
}
