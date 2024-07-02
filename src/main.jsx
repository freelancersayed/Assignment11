import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './component/Router.jsx'
import Authprovider from './component/Authprovider/Authprovider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider>
 <RouterProvider router={router}></RouterProvider>
 </Authprovider>
  </React.StrictMode>,
)
