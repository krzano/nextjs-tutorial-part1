import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";

export interface Task {
  id: string;
  content: string;
  createdAt: string;
  completed: boolean;
}

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) return <h2>No tasks to show...</h2>;
  return (
    <ul>
      {tasks.map(({ id, content, completed }) => (
        <li
          key={id}
          className="mb-4 flex items-center justify-between gap-8 rounded-md border border-base-300 px-4 py-2 shadow-sm hover:shadow-lg"
        >
          <h2
            className={`text-lg first-letter:uppercase ${
              completed ? "line-through opacity-70" : ""
            }`}
          >
            {content}
          </h2>
          <div className="flex gap-4">
            <Link
              href={`tasks/${id}`}
              className="btn btn-outline btn-primary btn-sm text-xs uppercase hover:text-clip"
            >
              edit
            </Link>
            <DeleteForm id={id} />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
