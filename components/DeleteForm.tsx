"use client";

import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-outline btn-error btn-sm text-xs uppercase"
      disabled={pending}
    >
      {pending ? <span className="loading loading-spinner"></span> : null}
      delete
    </button>
  );
};

const DeleteForm = ({ id }: { id: string }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
