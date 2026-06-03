import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { getTodoList } from "./TodoApi";
import { TodoDataItem } from "./TodoMock";

const TODO_LIST_STORAGE_KEY = "TODO_LIST";

interface TodoContextProps {
  todoList: TodoDataItem[];
  isLoading: boolean;
  createTodo: (newTodoTitle: string) => void;
  updateTodo: (updatedTodo: TodoDataItem) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  isLoading: false,
  createTodo: () => {},
  updateTodo: () => {},
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
      /* const storageValue = await AsyncStorage.getItem(TODO_LIST_STORAGE_KEY);
      if (storageValue === null) {
        setTodoList(todoItems);
      } else {
        setTodoList(JSON.parse(storageValue));
      } */
    })();
  }, []);

  const persistState = (list: TodoDataItem[]): TodoDataItem[] => {
    AsyncStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify(list));
    return list;
  };

  const createTodo = (newTodoTitle: string) =>
    setTodoList(
      persistState(
        todoList.concat({
          id: (Math.max(...todoList.map((i) => parseInt(i.id))) + 1).toString(),
          title: newTodoTitle,
          done: false,
        }),
      ),
    );
  const updateTodo = (updatedTodo: TodoDataItem) =>
    setTodoList(
      persistState(
        todoList.map((ti) => (ti.id === updatedTodo.id ? updatedTodo : ti)),
      ),
    );

  return (
    <TodoContext.Provider
      value={{ todoList, isLoading, createTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
