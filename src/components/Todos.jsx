import React from 'react'
import { Container , Form } from 'react-bootstrap'
import CompletedTodos from './CompletedTodos'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Todo from './Todo'
import Links from './Links'
import PendingTodos from './PendingTodos'

const Todos = () => {
  return (
    <Router>
        <div className='todos'>
            <Links />
            <Routes>
                <Route index path='/' element={<Todo />} />
                <Route path='completed/todos' element={ <CompletedTodos />} />
                <Route path='pending/todos' element={<PendingTodos />} />
            </Routes>
        </div>
    </Router>
  )
}

export default Todos