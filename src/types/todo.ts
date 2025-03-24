type TodoStatus = "notStarted" | "inProgress" | "done";

type Todo = {
  id: string;
  title: string;
  content: string;
  status: TodoStatus;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  assignees: string[];
};

export type { Todo, TodoStatus };
