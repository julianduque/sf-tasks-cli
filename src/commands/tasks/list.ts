import {Command, CliUx} from '@oclif/core'
import TasksDb from '../../lib/tasks-db'
import {Task} from '../../lib/task'

export default class TasksList extends Command {
  #db = new TasksDb(this.config.dataDir)
  static description = 'List all tasks'
  static aliases = ['list', 'ls']

  static flags = {
    ...CliUx.ux.table.flags(),
  }

  static examples = [
    '<%= config.bin %> <%= command.id %> --filter priority=Urgent',
  ]

  public static enableJsonFlag = true

  public async run(): Promise<Task[]> {
    const {flags} = await this.parse(TasksList)
    const tasks = this.#db.listTasks()
    CliUx.ux.table(tasks, {
      id: {
        header: 'ID',
        extended: true,
      },
      subject: {},
      priority: {},
      status: {},
      comment: {
        extended: true,
      },
      sfid: {
        header: 'Synced',
        get: (row: Task) => row.sfid ? `Yes (${row.sfid})` : 'No',
        extended: true,
      },
    }, {
      printLine: this.log.bind(this),
      ...flags,
    })
    return tasks
  }
}
