import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Tasks from './components/Tasks.jsx'
import Summary from './components/Summary.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Tasks />},
  {path: "/summary", element: <Summary />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
)
