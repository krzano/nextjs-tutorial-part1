import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

const TaskPage = async ({ params }: { params: { id: string } }) => {
  const task = await getTask(params.id);

  return (
    <div>
      <Link href={"/tasks"} className="btn btn-ghost btn-sm mb-8 uppercase">
        {"<"} <span>back to tasks</span>
      </Link>
      {task ? (
        <EditForm task={task} />
      ) : (
        <div className="mx-auto flex w-96 flex-col gap-6 rounded-md border border-error p-4 text-center shadow-lg shadow-slate-900">
          <h2 className="text-xl text-slate-400">
            Could not find any tasks with ID: {params.id}
          </h2>
        </div>
      )}
    </div>
  );
};
export default TaskPage;
