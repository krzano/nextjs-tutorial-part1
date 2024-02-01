import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask} className="mb-8">
      <div className="join w-full">
        <input
          type="text"
          name="content"
          required
          className="input join-item input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary join-item uppercase">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
