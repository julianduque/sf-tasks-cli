import {Command, Flags, CliUx} from '@oclif/core'
import {AuthInfo, Connection} from '@salesforce/core'
import TasksDb from '../../lib/tasks-db'
export default class TasksSync extends Command {
  #db = new TasksDb(this.config.dataDir)

  static aliases = ['sync']
  static description = 'Synchronize tasks with Salesforce'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    'target-org': Flags.string({char: 'o', description: 'Target org username', required: true}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(TasksSync)
    CliUx.ux.action.start('Fetching tasks from Salesforce', 'initializing', {stdout: true})
    const authInfo = await AuthInfo.create({username: flags['target-org']})
    const conn = await Connection.create({authInfo})

    // Get local tasks without a Salesforce ID
    const localTasks = this.#db.listLocalTasks()
    for await (const task of localTasks) {
      // Create a new Salesforce Task
      const sfTask = await conn.sobject('Task').create({
        Subject: task.subject,
        Priority: task.priority,
        Status: task.status,
        Description: task.comment,
      })
      // Update the local task with the Salesforce ID
      this.#db.updateTask({...task, sfid: sfTask.id})
      this.log(`Pushed task with id: ${task.id} to Salesforce`)
    }

    // Fetch tasks from Salesforce
    const tasks = await conn.query('SELECT Id, Subject, Priority, Status, Description FROM Task')
    for (const task of tasks.records) {
      const localTask = this.#db.getTaskBySfid(task.Id)
      if (!localTask) {
        // Create a new local task
        this.#db.createTask({
          sfid: task.Id,
          subject: task.Subject,
          priority: task.Priority,
          status: task.Status,
          comment: task.Description,
        })
        this.log(`Pulled task with id: ${task.Id} from Salesforce`)
      } else if (localTask.sfid !== null) {
        // Update the local task
        this.#db.updateTask({
          id: localTask.id,
          sfid: task.Id,
          subject: task.Subject,
          priority: task.Priority,
          status: task.Status,
          comment: task.Description,
        })
        this.log(`Updated task with id: ${task.Id} from Salesforce`)
      }
    }

    // Cleanup deleted tasks
    const deletedTasks = await conn.query('SELECT Id FROM Task WHERE IsDeleted = true', {
      scanAll: true,
    })
    for (const task of deletedTasks.records) {
      const localTask = this.#db.getTaskBySfid(task.Id)
      if (localTask) {
        this.#db.deleteTask(localTask.id)
        this.log(`Deleted task with id: ${task.Id} from Salesforce`)
      }
    }

    CliUx.ux.action.stop()
  }
}
