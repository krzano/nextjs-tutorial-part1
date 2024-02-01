"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { Task } from "@/components/TaskList";
import { redirect } from "next/navigation";
import { ITaskFormState } from "@/components/TaskFormCustom";
import { ZodError, z } from "zod";
import toast from "react-hot-toast";

export const getAllTasks = async () => {
  const tasks: Task[] = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};
export const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};
export const createTaskCustom = async (
  prevState: ITaskFormState,
  formData: FormData,
) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const content = formData.get("content") as string;
  const TaskSchema = z.object({
    content: z.string().min(5),
  });
  try {
    TaskSchema.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};
export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id")?.toString();
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};
export const getTask = async (id: string) => {
  const task: Task | null = await prisma.task.findUnique({
    where: { id },
  });
  return task;
};
export const editTask = async (formData: FormData) => {
  const id = formData.get("id")?.toString();
  const content = formData.get("content")?.toString();
  const completed = formData.get("completed")?.toString();
  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
