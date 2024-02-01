import { editTask } from "@/utils/actions";
import { Task } from "./TaskList";

const EditForm = ({ task: { id, content, completed } }: { task: Task }) => {
  return (
    <form action={editTask} className="mx-auto flex w-96 flex-col gap-4 ">
      <input type="hidden" value={id} name="id" />
      <input
        type="text"
        defaultValue={content}
        name="content"
        required
        className="input input-bordered input-lg"
      />
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox-primary checkbox checkbox-lg"
          />
        </label>
      </div>
      <button type="submit" className="btn uppercase">
        save changes
      </button>
    </form>
  );
};
export default EditForm;
