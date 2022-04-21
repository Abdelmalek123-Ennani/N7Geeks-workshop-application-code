import Header from './components/Header'
import TodoForm from './components/TodoForm';
import './App.css';
import { useState , useEffect } from 'react';
import Todos from './components/Todos';
import { TodosContext } from './components/TodosContext';
import axios from "axios"
import swal from 'sweetalert';

function App() {
  
  const [todos , setTodos] = useState([])
  

  // get data from placeHolderApi (using useEffect)
  useEffect(() => {
    const getDataFromApi = async () => {
        const senDRequest = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const getData =  senDRequest.data;

        setTodos(getData)
    }
    getDataFromApi();
  }, [])


  // add a new Todo
  const addATodo = (todo) => {
    setTodos([...todos , todo]);
  }



  // change the complete attribute to false or true
  const setCompleted = (id) => {

    setTodos(todos.map(el => {
      if( el.id == id ) {
       el.completed = !el.completed
       return el;
      };
      return el;
    }))

  }


  // delete a todo from todos
  const deleteAtodo = (id) => {
      setTodos(todos.filter((todo) => {
        return todo.id != id;
      }))
      swal("Deleted Successfully!", "you deleted the Todo successfully", "success");
  }



  // edit a task
  const editATodo = (id , title) => {
     const newTitle = prompt('ajouter new title' , title);
     setTodos(todos.map(el => {
        if( el.id == id ) {
        el.title = newTitle
        return el;
        };
            return el;
    }))
  }

  return (
    <div className="App">
        <Header />
        <TodoForm 
           handleSubmit={addATodo}
        />
        <TodosContext.Provider value={{
          todos,
          setCompleted,
          deleteAtodo,
          editATodo
        }}>
           <Todos />
        </TodosContext.Provider>
    </div>
  );
}

export default App;
