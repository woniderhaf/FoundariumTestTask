
export interface ITask  {
  card_id:        number,
  reviewer_id:    number,
  name:           string,
  reward:         number,
  photo_required: boolean,
  video_required: boolean,
  schedule:       boolean[]  | null,
  period_start:   string | null,
  period_stop:    string  | null,
  description:    string   | null,
  every_month:    number[] | null,
  type:           ETaskTypes,

}

export enum ETaskTypes {
  ALL = "ALL",
  TASKS = "TASKS",
  CORSES = "CORSES",
}
