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

  setup() : void {
    this.#client.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject TEXT NOT NULL,
        priority TEXT NOT NULL,
        status TEXT NOT NULL,
        comment TEXT NULL
      )
    `)
  }

  createTask(task: Task): Task {
    const stmt = this.#client.prepare(`
      INSERT INTO tasks (subject, priority, status, comment)
      VALUES (@subject, @priority, @status, @comment)
    `)

    const info = stmt.run(task)
    return {...task, id: info.lastInsertRowid}
  }

  listTasks(): Task[] {
    const stmt = this.#client.prepare('SELECT * FROM tasks')
    return stmt.all() as Task[]
  }

  /*
  getTask(id: number): Task {}
  completeTask(id: number): Task {}
  */
}
