import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
  return (
    <div>
        <h1>Child Component</h1>
        <Grandchild/>
    </div>

  )
}

export default Child