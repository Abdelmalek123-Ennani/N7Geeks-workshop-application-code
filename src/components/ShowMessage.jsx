import React from 'react'

const ShowMessage = ( { message } ) => {
  return (
    <div className='show-message'>{message}</div>
  )
}

ShowMessage.defaultProps = {
    message : "There is No todos To Show"
}

export default ShowMessage