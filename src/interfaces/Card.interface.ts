
import { ITask } from "./ITask.interface"

export interface ICard {
  task:ITask
  onCardPress:(item:ITask) => void

}