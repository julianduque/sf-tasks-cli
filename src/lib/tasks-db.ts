import BetterSqlite3 from 'better-sqlite3'
import {Task} from './task'
import path from 'node:path'
import {existsSync, mkdirSync} from 'node:fs'

export default class TasksDb {
  #client : BetterSqlite3.Database

  constructor(dataDir: string) {
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, {recursive: true})
    }

    this.#client = new BetterSqlite3(path.join(dataDir, 'tasks.db'))
    this.setup()
  }

  /**
   * Setup the database
   * @returns void
   */
  setup() : void {
    this.#client.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sfid TEXT NULL,
        subject TEXT NOT NULL,
        priority TEXT NOT NULL,
        status TEXT NOT NULL,
        comment TEXT NULL
      )
    `)
  }

  /**
   * Creates a new task in the local database
   * @param task - the task to create
   * @returns Task
   */
  createTask(task: Task): Task {
    const stmt = this.#client.prepare(`
      INSERT INTO tasks (subject, priority, status, comment, sfid)
      VALUES (@subject, @priority, @status, @comment, @sfid)
    `)

    const info = stmt.run(task)
    return {...task, id: info.lastInsertRowid}
  }

  /**
   * Updates a task in the local database
   * @param task - the task to update
   * @returns Task
   */
  updateTask(task: Task): Task {
    const stmt = this.#client.prepare(`
      UPDATE tasks
      SET subject = @subject,
          priority = @priority,
          status = @status,
          comment = @comment,
          sfid = @sfid
      WHERE id = @id
    `)
    stmt.run(task)
    return task
  }

  /**
   * List all tasks in the local database
   * @returns Task[]
   */
  listTasks(): Task[] {
    const stmt = this.#client.prepare('SELECT * FROM tasks')
    return stmt.all() as Task[]
  }

  /**
   * List all local tasks in database that are not in Salesforce
   * @returns Tasl[]
   */
  listLocalTasks(): Task[] {
    const stmt = this.#client.prepare('SELECT * FROM tasks WHERE sfid IS NULL')
    return stmt.all() as Task[]
  }

  /**
   * Get a task by Salesforce ID
   * @param sfid - the Salesforce ID of the task to find
   * @returns Task | null
   */
  getTaskBySfid(sfid: string | undefined): Task | null {
    const stmt = this.#client.prepare('SELECT * FROM tasks WHERE sfid = ?')
    return stmt.get(sfid) as Task | null
  }

  /**
   * Delete a task by local ID
   * @param id - the ID of the task to delete
   * @returns void
   */
  deleteTask(id: number | bigint | undefined): void {
    const stmt = this.#client.prepare('DELETE FROM tasks WHERE id = ?')
    stmt.run(id)
  }
}
