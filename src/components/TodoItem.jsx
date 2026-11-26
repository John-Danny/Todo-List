import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ task, handleDeleteTask, handleToggleCompleted }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 relative">
        <input
          type="checkbox"
          id={`task${task.id}`}
          onChange={() => {
            handleToggleCompleted(task.id);
          }}
          className={`peer appearance-none w-6 h-6 rounded-xl z-10 cursor-pointer  ${task.completed ? "bg-primary" : "bg-white"}`}
        />

        <label for={`task${task.id}`}>
          <FontAwesomeIcon
            icon={faCheck}
            className={`text-white absolute top-1 left-0.5 font-bold cursor-pointer ${task.completed ? "" : "hidden!"}  `}
          />
        </label>
      </div>

      <div className="w-full h-12 bg-[#292929] rounded-[10px] flex items-center justify-between px-4">
        <label for={`task${task.id}`}>
          <h3
            className={`cursor-pointer ${task.completed ? "line-through text-[#aaa]" : "text-white "}`}
          >
            {task.title}
          </h3>
        </label>
        <button
          onClick={() => {
            handleDeleteTask(task.id);
          }}
          className="text-sm text-[#ddd] px-3 py-1 rounded-2xl border border-[#888] cursor-pointer hover:bg-[#404040]"
        >
          {" "}
          XÓA
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
