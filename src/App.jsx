import { ToDoProvider } from "./ToDoContext/ToDoContext"
import { ToDoList } from "./ToDoList"

export const App = () => {
  return (
    <>
    <ToDoProvider>
      <ToDoList/>
    </ToDoProvider>
    </>
  )
}
