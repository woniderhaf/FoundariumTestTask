import { ITask } from "./ITask.interface";


export interface IOnCardPress extends Pick<ITask, "name" | "description"> {}
