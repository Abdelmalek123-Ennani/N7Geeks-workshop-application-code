import React from 'react'
import { useContext , useState} from 'react'
import { TodosContext } from './TodosContext';
import ShowMessage from './ShowMessage'

const CompletedTodos = ( ) => {
  
  const {todos 
         , setCompleted 
         , deleteAtodo
         , editATodo} = useContext(TodosContext);

   const newTodos = todos.filter(el => {
        if ( el.completed == true ) return el;
   });

  return (
      <>
        {newTodos.length == 0 ? <ShowMessage message="No completed todos yet" />  : newTodos.map(el => (
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

export default CompletedTodos