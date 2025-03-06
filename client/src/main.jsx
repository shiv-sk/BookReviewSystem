import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NewBook from './pages/NewBooks.jsx';
import BookDetail from './pages/BookDetail.jsx';
import { AuthProvider } from './context/UserContext.jsx';
import { BookProvider } from './context/BookContrxt.jsx';
import { ReviewProvider } from './context/ReviewContext.jsx';
import AllBooks from './pages/AllBooks.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import PrivateRoute from './utils/ProtectedRoute.jsx';
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
        path:"allbooks",
        element:<AllBooks/>
      },
      {
        path:"profile",
        element:(
        <PrivateRoute>
        <Profile/>
        </PrivateRoute>)
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
        element:(
          <PrivateRoute>
          <BookDetail/>
          </PrivateRoute>)
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
