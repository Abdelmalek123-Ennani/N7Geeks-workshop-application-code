import React from 'react'
import { useContext } from 'react'
import { TodosContext } from './TodosContext';
import ShowMessage from './ShowMessage'

const Todo = ( ) => {
  
  const {todos 
         , setCompleted 
         , deleteAtodo
         , editATodo} = useContext(TodosContext);

  return (
      <>
        { todos.length == 0 ? <ShowMessage message="no todos to show" />  :  todos.map(el => (
            <div className='todo' key={el.id} 
            onDoubleClick={() => setCompleted(el.id)}
            >
            <div>
                <span 
                  className={ el.completed ?  `text-decoration` : ""}
                >{el.title}</span>
             </div>
             <div>
                 <button
                    onClick={() => deleteAtodo(el.id)}
                    className="btn btn-danger"
                 >remove</button>
                 <button
                  className="btn btn-success" 
                  onClick={() => editATodo(el.id , el.title)}
                >edit</button>
             </div>
         </div>
        ))}
     </>
  )
}

export default Todo