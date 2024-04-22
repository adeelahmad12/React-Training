export default function ToDoTask({ todo }: { todo: any }) {
    return (
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.task}
        </span>
    );
}
