import { useState } from "react";
import TodoList from "./TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const TodoForm = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hoàn thành giao diện Todo", completed: true },
    { id: 2, title: "Hoàn thiện code React", completed: false },
    { id: 3, title: "Deploy Vercel", completed: false },
  ]);
  const countTaskNotCompleted = tasks.filter((task) => !task.completed).length;
  tasks.sort((a, b) => {
    return b.completed - a.completed;
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");

    if (!input.value || input.value.trim().length === 0) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Math.round(Math.random() * 1000000),
        title: input.value,
        completed: false,
      },
    ]);
    input.value = "";
  };

  const handleDeleteTask = (targetId) => {
    setTasks(tasks.filter((task) => task.id !== targetId));
  };

  const handleToggleCompleted = (targetId) => {
    console.log(`toggle ${targetId}`);

    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === targetId) {
          return { ...task, completed: !task.completed };
        }

        return task;
      });
    });
  };

  return (
    <div className="max-w-200 mx-auto h-110 mt-4 p-4 bg-bg-surface-container rounded-3xl shadow-2xl flex flex-col items-center gap-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faList}
            className="w-5! h-5! text-sm p-3 bg-primary rounded-full"
          />
          <h1 className="text-3xl text-white">My Todo List</h1>
        </div>

        <span className="text-sm text-[#ddd]">
          Còn lại: {countTaskNotCompleted} công việc
        </span>
      </div>
      <div className="w-full ">
        <form
          onSubmit={handleAddTask}
          className="w-full flex justify-between gap-2"
        >
          <input
            type="text"
            placeholder="Nhập tên công việc..."
            className="w-[80%] text-[#ddd] text-base p-4 border border-outline rounded-2xl outline-outline"
          />
          <button className="w-[20%] px-4 py-2 text-black font-bold bg-primary rounded-2xl cursor-pointer hover:bg-[#179e54] hover:transform hover:scale-[105%] transition-all duration-300 ease-out">
            THÊM
          </button>
        </form>
      </div>
      {!tasks || tasks.length === 0 ? (
        <p className="text-3xl text-white font-bold">Chưa có công việc nào!</p>
      ) : (
        <TodoList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleToggleCompleted={handleToggleCompleted}
        ></TodoList>
      )}
    </div>
  );
};

export default TodoForm;
