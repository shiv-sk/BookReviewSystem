import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NewBook from './pages/NewBooks.jsx';
import BookDetail from './pages/BookDetail.jsx';
import { AuthProvider } from './context/UserContext.jsx';
import { BookProvider } from './context/BookContrxt.jsx';
import { ReviewProvider } from './context/ReviewContext.jsx';
import Exp from './pages/Exp.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"book/new",
        element:<NewBook/>
      },
      {
        path:"book/:bookId",
        element:<BookDetail/>
      },
      {
        path:"book/exp",
        element:<Exp/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BookProvider>
        <ReviewProvider>   
        <RouterProvider router={router}>
        <App />
        </RouterProvider>
        </ReviewProvider> 
      </BookProvider>
    </AuthProvider>
  </StrictMode>,
)
