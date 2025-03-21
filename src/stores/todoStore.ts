import { create } from "zustand";

type Todo = {
  id: number;
  title: string;
};

interface TodoActions {
  setTodo: (todo: Todo[]) => void;
  setSubscibe: () => void;
}

interface TodoState {
  todos: Todo[];
  isSubscribe: boolean;
  actions: TodoActions;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  isSubscribe: false,
  actions: {
    setTodo: (todos) => set({ todos }),
    setSubscibe: () =>
      set((old) => ({
        isSubscribe: !old.isSubscribe,
      })),
  },
}));

export const useTodos = () => useTodoStore((state) => state.todos);

export const useTodo = (id: number) =>
  useTodoStore((state) => state.todos.find((todo) => todo.id === id));

export const useSubscribed = () => useTodoStore((state) => state.isSubscribe);

export const useTodoActions = () => useTodoStore((state) => state.actions);
