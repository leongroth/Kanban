import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Tasks from './components/Tasks.jsx'
import Summary from './components/Summary.jsx'
import UserButton from './components/UserButton.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Tasks />},
  {path: "/summary", element: <Summary />},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-screen h-screen bg-white dark:bg-[#362E3E] transition-all duration-500'> 
      <UserButton />
      <Navbar />
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
