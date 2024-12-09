import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Project from './components/Project';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'projects',
        element: <Project />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
