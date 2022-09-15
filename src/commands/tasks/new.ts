import {Command, Flags, CliUx} from '@oclif/core'
import TasksDb from '../../lib/tasks-db'
import {Task} from '../../lib/task'

export default class TasksNew extends Command {
  #db = new TasksDb(this.config.dataDir)

  static description = 'Create a new Salesforce Task'

  static examples = [
    '<%= config.bin %> <%= command.id %> "Email" --priority "Normal" --status "Not Started"',
    '<%= config.bin %> <%= command.id %> "Call" "This is a comment" -p "Urgent" -s "Not Started"',
  ]

  static flags = {
    priority: Flags.string({char: 'p', description: 'Priority of the task', default: 'Normal'}),
    status: Flags.string({char: 's', description: 'Status of the task', default: 'Not Started'}),
  }

  static args = [{
    name: 'subject',
    options: ['Call', 'Email', 'Send Letter', 'Send Quote', 'Other'],
  }, {
    name: 'comment',
    required: false,
  }]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TasksNew)
    let subject = args.subject
    if (!subject) {
      subject = await CliUx.ux.prompt('What is the subject of your task?')
    }

    const task : Task = {
      subject,
      priority: flags.priority,
      status: flags.status,
      comment: args.comment || '',
    }

    const {id} = this.#db.createTask(task)

    this.log(`Task created successfully with subject: ${subject} and id: ${id}`)
  }
}
