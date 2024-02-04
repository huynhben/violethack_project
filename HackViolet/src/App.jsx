import { useState } from 'react'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'

function App() {
  return (
    <>
      <div className="flex flex-col bg-violet-200">
        <SignUp />
        <LogIn />
      </div>
    </>
  )
}

export default App
