import React from 'react'
import B from './B'

const A = ({name}) => {
  return (
    <div>
        <h1>Props drilling</h1>
        <B name={name} />
      
    </div>
  )
}

export default A
