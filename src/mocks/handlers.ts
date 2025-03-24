import { http, HttpResponse, delay } from "msw";

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

let todos: Todo[] = [
  {
    id: "1",
    title: "프로젝트 기획",
    content: "새 프로젝트 범위 및 요구사항 정의",
    status: "done",
    startDate: "2023-06-01",
    endDate: "2023-06-05",
    createdAt: "2023-06-01T09:00:00Z",
    updatedAt: "2023-06-05T16:30:00Z",
    assignees: ["김철수", "이민호"],
  },
  {
    id: "2",
    title: "디자인 시스템 구축",
    content: "컴포넌트 라이브러리 설계 및 구현",
    status: "inProgress",
    startDate: "2023-06-06",
    endDate: "2023-06-15",
    createdAt: "2023-06-06T10:15:00Z",
    updatedAt: "2023-06-10T14:20:00Z",
    assignees: ["박지영", "이민호"],
  },
  {
    id: "3",
    title: "API 연동",
    content: "백엔드 API와 프론트엔드 연동 작업",
    status: "notStarted",
    startDate: "2023-06-16",
    endDate: "2023-06-20",
    createdAt: "2023-06-10T11:30:00Z",
    updatedAt: "2023-06-10T11:30:00Z",
    assignees: ["이민호"],
  },
];

const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const handlers = [
  http.get("/api/todos", async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const assignee = url.searchParams.get("assignee");

    let filteredTodos = [...todos];

    if (status) {
      filteredTodos = filteredTodos.filter((todo) => todo.status === status);
    }

    if (assignee) {
      filteredTodos = filteredTodos.filter((todo) =>
        todo.assignees.includes(assignee)
      );
    }

    return HttpResponse.json(filteredTodos);
  }),

  http.get("/api/todos/:id", async ({ params }) => {
    await delay(200);

    const { id } = params;
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(todo);
  }),

  http.post("/api/todos", async ({ request }) => {
    await delay(400);

    const newTodo = (await request.json()) as Omit<
      Todo,
      "id" | "createdAt" | "updatedAt"
    >;
    const now = new Date().toISOString();

    const todo: Todo = {
      ...newTodo,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };

    todos.push(todo);

    console.log(todo);

    return HttpResponse.json(todo, { status: 201 });
  }),

  http.put("/api/todos/:id", async ({ request, params }) => {
    await delay(300);

    const { id } = params;
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    const updatedTodoData = (await request.json()) as Partial<
      Omit<Todo, "id" | "createdAt" | "updatedAt">
    >;
    const now = new Date().toISOString();

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...updatedTodoData,
      updatedAt: now,
    };

    return HttpResponse.json(todos[todoIndex]);
  }),

  http.delete("/api/todos/:id", async ({ params }) => {
    await delay(300);

    const { id } = params;
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    const deletedTodo = todos[todoIndex];
    todos = todos.filter((todo) => todo.id !== id);

    return HttpResponse.json(deletedTodo);
  }),
];
