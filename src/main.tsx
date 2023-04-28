import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.tsx'
import './global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './routes/About.tsx'
import { Projects } from './routes/Projects.tsx'
import { ErrorPage } from './routes/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <About />
      },
      {
        path:"/projects",
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
