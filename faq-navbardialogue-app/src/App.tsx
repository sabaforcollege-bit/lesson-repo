import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/navbar'
import Home from './assets/home'
import About from './assets/about'
import TodoList from './assets/todolist'
function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Navbar />

      <main className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App