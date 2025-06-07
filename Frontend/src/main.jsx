import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/login.jsx'
import Signup from './routes/signup.jsx'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/signup",
    element : <Signup/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
)
