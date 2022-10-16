import './task.css'

interface TaskProps {
    status: 'todo'
    title: string
    description: string
}

export function Task(props: TaskProps) {
    const { title, description } = props

    return (
        <div className="root">
            <h2 className='title'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}