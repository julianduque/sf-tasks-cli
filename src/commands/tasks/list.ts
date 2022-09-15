import {Command, Flags} from '@oclif/core'
import TasksDb from '../../lib/tasks-db'

export default class TasksList extends Command {
  #db = new TasksDb(this.config.dataDir)
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const tasks = this.#db.listTasks()
    this.log(JSON.stringify(tasks))
  }
}
