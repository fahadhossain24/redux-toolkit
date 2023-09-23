import './App.css'
import Books from './components/Books'
import PostView from './features/posts/PostView'
import Todos from './features/todos/Todos'

function App() {
  return (
    <div>
      <Books/>
      <Todos/>
      <PostView/>
    </div>
  )
}

export default App
