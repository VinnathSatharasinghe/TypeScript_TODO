export enum PivotKeysEnum {
    Tasks = "Tasks",
    TasksForm = "TaskForm",
    CompletedTasks = "CompletedTasks",
}

export interface ITask {
    id: string;
    title: string;
    isfav: boolean;  
}

