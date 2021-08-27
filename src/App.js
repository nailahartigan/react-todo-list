import { useState } from "react"

const App = () => {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState( [] )
const App = () => {
  return(
      <div>
      <h1>my todo list</h1>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      <InputDisplay input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} />
      </div>
  )
}

const TaskList = ({ tasks }) => {

  const deleteHandler = (index) => {
      const newTasks = [...tasks]
      newTasks.splice(index, 1)
  }
  
  return (
      <div>
          {tasks.map((task, index) => {
              return (
              <>               
                <button className="remove" onClick={ () => deleteHandler(index)}>delete</button>
                <p>{task}</p>
              </>
              )
          })}
      </div>
  )
}

const InputDisplay = (props) => {

const addTaskHandler = () => {

  const newTasks = [...props.tasks]
  newTasks.push(props.input)
  props.setTasks(newTasks)
  props.setInput("")
}

  return(
   <div>
      <input type="text" onChange={(event) => props.setInput(event.target.value)}/>
      <button onClick={addTaskHandler}>add task</button>
   </div>
  )
}
}

export default App
