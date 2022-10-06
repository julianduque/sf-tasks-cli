import {Command, Flags, CliUx} from '@oclif/core'
import {AuthInfo, Connection} from '@salesforce/core'

export default class TasksSync extends Command {
  static description = 'describe the command here'

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
    const tasks = await conn.query('SELECT Id, Subject, Priority, Status, Description FROM Task')
    for (const task of tasks.records) {
      this.log(`Task: ${task.Subject} (${task.Id}) - ${task.Priority} - ${task.Status} - ${task.Description}`)
    }

    CliUx.ux.action.stop()
  }
}
