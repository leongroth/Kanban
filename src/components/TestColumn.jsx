import TestCard from "./TestCard"

const TestColumn = ({column, tasks}) => {
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
        <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
        <div className="flex flex-1 flex-col gap-4">{tasks.map((task => {
            return <TestCard key={task.id} task={task}/>
        }))}</div>
    </div>
  )
}

export default TestColumn