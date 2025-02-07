import { createBrowserRouter, RouterProvider } from 'react-router'
import Tasks from './components/Tasks.jsx'
import Summary from './components/Summary.jsx'
import UserButton from './components/UserButton.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.jsx'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'



const App = () => {

    const [state, setState] = useState()
    
      onAuthStateChanged(auth, (user) => {
              if(user){
                setState(true)
              } else {
                setState(false)
              }
            })



    const router = createBrowserRouter([
        {path: "/", element: <Tasks />},
        {path: "/summary", element: <Summary />},
        ])

  return (
    <div>
      <div className='w-screen h-screen bg-white dark:bg-[#362E3E] transition-all duration-500'> 
        <UserButton />
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
