import React from 'react'
import SlowExample from './assets/components/SlowExample'
import OptimizedExample from './assets/components/OptimizedExample'
import Parent from './assets/components/Parent'
import { UserProvider } from './assets/context/UserContext'

const App = () => {
  return (
    <div>
      {/* <SlowExample/>
      <OptimizedExample/> */}
      <h1>App Component</h1>

      {/* provider */}
      <UserProvider>
        <Parent/>
      </UserProvider>
    </div>
  )
}

export default App