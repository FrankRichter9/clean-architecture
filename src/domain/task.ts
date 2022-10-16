type TaskStatus = 'todo'

export class Task {
    id: string
    status: TaskStatus
    title: string
    description: string

    constructor(id: string, status: TaskStatus, title: string, description: string) {
        this.id = id
        this.status = status
        this.title = title
        this.description = description
    }

    updateStatus(status: TaskStatus) {
        this.status = status
    }
}