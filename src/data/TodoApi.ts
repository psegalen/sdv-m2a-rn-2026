import { TodoDataItem } from "./TodoMock";

interface BaseResponse {
  total: number;
  skip: number;
  limit: number;
}

export interface TodoListResponse extends BaseResponse {
  todos: Todo[];
}

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface UserResponse extends BaseResponse {
  users: User[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
}

export const getTodoList = async (): Promise<TodoDataItem[]> => {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    const data: TodoListResponse = await response.json();
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("");
      }, 1000),
    );
    return data.todos.map(
      (t): TodoDataItem => ({
        id: t.id.toString(),
        title: t.todo,
        done: t.completed,
      }),
    );
  } catch (e) {
    console.error("TodoList fetch failed", e);
    return [];
  }
};
