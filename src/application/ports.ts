import { Task } from '../domain/task'

export interface TasksStorageService {
    tasks: Task[]
    updateTasks(tasks: Task[]): void
}