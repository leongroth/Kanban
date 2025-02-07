import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Tasks from './components/Tasks.jsx'
import Summary from './components/Summary.jsx'
import UserButton from './components/UserButton.jsx'
import Test from './Test.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Tasks />},
  {path: "/summary", element: <Summary />},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserButton />
    <Navbar />
    <RouterProvider router={router} />
    <Test />
  </StrictMode>,
)
