import React, { createContext, useReducer } from "react";
import { ITask, ITodoContext, ITodoState } from "../Types";

export const TodoContext = createContext<ITodoContext>({
  activeTasks: [],
  dispatch: () => {},
});

type Props = {
  children: React.ReactNode;
};

const reducer = (state: ITodoState, action: any) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "add":
      const { data } = action;
      data.id = new Date().toJSON();
      return { ...state, activeTask: [action.data, ...state.activeTasks] };
  }

  return { ...state };
};

const TodoProvider = (props: Props) => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
      isFav: true,
    },
    {
      id: "2",
      title: "Task 2",
      isFav: false,
    },
    {
      id: "3",
      title: "Task 3",
      isFav: true,
    },
  ];

  const data = { activeTasks: tasks };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <TodoContext.Provider value={{ activeTasks:state.activeTasks, dispatch }}>
      {props.children}
    </TodoContext.Provider>  
  );
};

export default TodoProvider;
