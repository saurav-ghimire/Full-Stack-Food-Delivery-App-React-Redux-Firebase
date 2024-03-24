import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Home} from './components'
import FoodStore from './store/index.js';
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={FoodStore}>
          <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>,
)
