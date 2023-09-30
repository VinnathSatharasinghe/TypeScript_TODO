import { Dispatch } from "react";

export enum PivotKeysEnum {
  Tasks = "Tasks",
  TasksForm = "TaskForm",
  CompletedTasks = "CompletedTasks",
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  isFav: boolean;
}

export interface ITodoContext {
  activeTasks: ITask[];
  dispatch: Dispatch<any>;
}

export interface ITodoState {
  activeTasks: ITask[];
}
