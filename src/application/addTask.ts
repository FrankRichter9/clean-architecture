import { Task } from "../domain/task";
import { TasksStorageService } from './ports'

const tasksStorage: TasksStorageService = {}

export function addTask(task: Task) {
    const { tasks } = tasksStorage
    tasksStorage.updateTasks([...tasks, task])
}