import React, { useState } from 'react'
import { Row , Col , Form , FloatingLabel} from 'react-bootstrap'
import swal from 'sweetalert'

const TodoForm = ({ handleSubmit }) => {



    const [todoTitle , setTodoTitle] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();


        if ( todoTitle.trim() == "" ) {
          // swal({
          //   icon: "warning",
          // });

          swal("Ooops!", "Please fill in the field!", "warning");
          return;
        }

        // get a random ID 
        const randomId = Math.floor(Math.random() * 100000) + 1;

        handleSubmit({
            title : todoTitle,
            id : randomId,
            completed : false
        })

        setTodoTitle('')
    }

  return (
    <div 
       fluid 
       className='p-4 bg-dark text-white'
    >
       <form 
          method='post' 
          className='add-todo-form'
          onSubmit={handleFormSubmit}
          >
           <div>
               <input 
                  type="text" 
                  placeholder="What's in your mind" 
                  value={todoTitle}
                  onChange={(e) => setTodoTitle(e.target.value)}
                />
               <input type="submit" value="add" />
           </div>
       </form>
    </div>
  )
}

export default TodoForm