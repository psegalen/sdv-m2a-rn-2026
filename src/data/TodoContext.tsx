import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { createTodoOnServer, getTodoList, updateTodoOnServer } from "./TodoApi";
import { TodoDataItem } from "./TodoMock";

interface TodoContextProps {
  todoList: TodoDataItem[];
  isLoading: boolean;
  createTodo: (newTodoTitle: string) => Promise<void>;
  updateTodo: (updatedTodo: TodoDataItem) => Promise<void>;
}

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  isLoading: false,
  createTodo: () => Promise.resolve(),
  updateTodo: () => Promise.resolve(),
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

  return (
    <TodoContext.Provider
      value={{ todoList, isLoading, createTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
