import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleDeleteTask, handleToggleCompleted }) => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-y-auto">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleToggleCompleted={handleToggleCompleted}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
