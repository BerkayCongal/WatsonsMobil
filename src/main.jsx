import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Container from './components/Container'
import Basket from "./components/Basket"
 
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Header/>,
      children: [
        {
          index: true, element: <Container/>,
        },
        {
          path:"/basket",
          element:<Basket/>
        }
      ]
      
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
