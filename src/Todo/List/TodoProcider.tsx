import React, { createContext } from "react";
import { ITask } from "../Types";

export const TodoContext = createContext<{ activeTasks: ITask[] }>({
  activeTasks: [],
});

type Props = {
    children : React.ReactNode
}

const TodoProcider = (props: Props) => {

  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
      isfav: true,
    },
    {
      id: "2",
      title: "Task 2",
      isfav: false,
    },
    {
      id: "3",
      title: "Task 3",
      isfav: true,
    },
  ];

  return (
    <TodoContext.Provider value={{ activeTasks: tasks }}>

        {
            props.children
        }

    </TodoContext.Provider>
  );
};

export default TodoProcider;
