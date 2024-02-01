"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item uppercase"
      disabled={pending}
    >
      {pending ? <span className="loading loading-spinner"></span> : null}
      create task
    </button>
  );
};

export interface ITaskFormState {
  message: string | null;
}

const initialState: ITaskFormState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "success") {
      toast.success("task created");
    }
    if (state.message === "error") {
      toast.success("there was an error");
    }
  }, [state]);
  return (
    <form action={formAction} className="mb-8">
      <div className="join w-full">
        <input
          type="text"
          name="content"
          required
          className="input join-item input-bordered w-full"
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskFormCustom;
