import { createBrowserRouter, RouterProvider } from 'react-router'
import Tasks from './components/Tasks.jsx'
import Summary from './components/Summary.jsx'
import UserButton from './components/UserButton.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase.jsx'
import Navbar from './components/Navbar.jsx'
import { useEffect, useState } from 'react'
import Test from './components/Test.jsx'
import KanbanTest from './components/KanbanTest.jsx'
import Backlog from './components/Backlog.jsx'
import { child, onValue, ref } from 'firebase/database'



const App = () => {

  const state = JSON.parse(localStorage.getItem('isDarkmode'))
  if(state == "true"){
    document.documentElement.classList.toggle("dark")
  } else {
  }



    const router = createBrowserRouter([
        {path: "/", element: <Tasks />},
        {path: "/summary", element: <Summary />},
        {path: "/test", element: <Test />},
        {path: "/kanbantest", element: <KanbanTest />},
        {path: "/backlog", element: <Backlog />}
        ])

  localStorage.setItem('test', JSON.stringify("acting"))

  const storedData = localStorage.getItem('test')
  const parsedData = JSON.parse(storedData)

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
