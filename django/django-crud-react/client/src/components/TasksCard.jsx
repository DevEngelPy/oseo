
function TasksCard({tasks}) {
  return (
    <div >
            <h2>{tasks.title}</h2>
            <p>{tasks.description}</p>
    </div>
  )
}

export default TasksCard