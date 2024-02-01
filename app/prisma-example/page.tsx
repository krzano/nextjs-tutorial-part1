import prisma from "@/utils/db";
import { Prisma } from "@prisma/client";

const prismaHandlers = async () => {
  console.log("Prisma example");
  // await prisma.task.create({
  // 	data: {
  // 		content: "test task",
  // 		completed: true,
  // 	},
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks: { id: string; content: string; completed: boolean }[] =
    await prismaHandlers();

  if (tasks.length === 0) return <h2>No tasks to show...</h2>;
  return (
    <div>
      <h1 className="text-xl">
        {tasks.map((task) => (
          <h2
            className={task.completed ? "text-success" : "text-error"}
            key={task.id}
          >
            {task.content}
          </h2>
        ))}
      </h1>
    </div>
  );
};
export default PrismaExamplePage;
