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

export const createTodoOnServer = async (
  todo: TodoDataItem,
): Promise<boolean> => {
  try {
    const response = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: todo.title,
        completed: todo.done,
        userId: 5,
      }),
    });
    console.log("Created TODO on server", response);
    return response.ok;
  } catch (e) {
    console.error("Creating a Todo failed", e);
    return false;
  }
};

export const updateTodoOnServer = async (
  newTodo: TodoDataItem,
): Promise<boolean> => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${newTodo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    console.log("Updated TODO on server", response);
    return response.ok;
  } catch (e) {
    console.error("Updating a Todo failed", e);
    return false;
  }
};

export const deleteTodoOnServer = async (todoId: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE",
    });
    console.log("Deleted TODO on server", response);
    return response.ok;
  } catch (e) {
    console.error("Updating a Todo failed", e);
    return false;
  }
};
