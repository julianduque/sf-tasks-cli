export type Task = {
  id?: number | bigint,
  sfid?: string | null,
  subject: string,
  priority: string,
  status: string,
  comment?: string,
}
