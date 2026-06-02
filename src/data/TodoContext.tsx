import { createContext, FC, PropsWithChildren, useState } from "react";
import { TodoDataItem, todoItems } from "./TodoMock";

interface TodoContextProps {
  todoList: TodoDataItem[];
  createTodo: (newTodoTitle: string) => void;
  updateTodo: (updatedTodo: TodoDataItem) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  createTodo: () => {},
  updateTodo: () => {},
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todoList, setTodoList] = useState(todoItems);

  const createTodo = (newTodoTitle: string) =>
    setTodoList(
      todoList.concat({
        id: (Math.max(...todoList.map((i) => parseInt(i.id))) + 1).toString(),
        title: newTodoTitle,
        done: false,
      }),
    );
  const updateTodo = (updatedTodo: TodoDataItem) =>
    setTodoList(
      todoList.map((ti) => (ti.id === updatedTodo.id ? updatedTodo : ti)),
    );

  return (
    <TodoContext.Provider value={{ todoList, createTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
