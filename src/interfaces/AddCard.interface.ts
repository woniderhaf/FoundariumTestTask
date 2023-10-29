import { ITask } from "./ITask.interface";
export interface IAddCard extends Omit<ITask, "card_id"|"photo_required"|"schedule"> {}

export type TAddCard = (item:IAddCard) => void
