import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <div className='links'>
      <div>
          <NavLink 
                to="/"
                style={({ isActive }) => {
                  return  isActive ? {
                     borderBottom : "solid 2px #FFF"
                   } : undefined;
                 } }
          >All Todos</NavLink>
          <NavLink
                to="/completed/todos" 
                style={({ isActive }) => {
                 return  isActive ? {
                    borderBottom : "solid 2px #FFF"
                  } : undefined;
                } }>completed Todos</NavLink>
          <NavLink 
                 to="/pending/todos"
                 style={({ isActive }) => {
                  return  isActive ? {
                     borderBottom : "solid 2px #FFF"
                   } : undefined;
                 } }
          >pending Todos</NavLink>
      </div>
    </div>
  )
}

export default Links