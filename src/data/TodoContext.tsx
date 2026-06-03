import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import {
  createTodoOnServer,
  deleteTodoOnServer,
  getTodoList,
  updateTodoOnServer,
} from "./TodoApi";
import { TodoDataItem } from "./TodoMock";

interface TodoContextProps {
  todoList: TodoDataItem[];
  isLoading: boolean;
  createTodo: (newTodoTitle: string) => Promise<void>;
  updateTodo: (updatedTodo: TodoDataItem) => Promise<void>;
  deleteTodo: (todoId: string) => Promise<void>;
}

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  isLoading: false,
  createTodo: () => Promise.resolve(),
  updateTodo: () => Promise.resolve(),
  deleteTodo: () => Promise.resolve(),
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todoList, setTodoList] = useState<TodoDataItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const apiList = await getTodoList();
      setTodoList(apiList);
      setIsLoading(false);
    })();
  }, []);

  const createTodo = async (newTodoTitle: string) => {
    const newTodo: TodoDataItem = {
      id: (Math.max(...todoList.map((i) => parseInt(i.id))) + 1).toString(),
      title: newTodoTitle,
      done: false,
    };
    await createTodoOnServer(newTodo);
    setTodoList(todoList.concat(newTodo));
  };
  const updateTodo = async (updatedTodo: TodoDataItem) => {
    await updateTodoOnServer(updatedTodo);
    setTodoList(
      todoList.map((ti) => (ti.id === updatedTodo.id ? updatedTodo : ti)),
    );
  };
  const deleteTodo = async (todoId: string) => {
    await deleteTodoOnServer(todoId);
    setTodoList(todoList.filter((ti) => ti.id !== todoId));
  };

  return (
    <TodoContext.Provider
      value={{ todoList, isLoading, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
