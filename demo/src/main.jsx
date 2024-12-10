import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AboutMe from './components/AboutMe.jsx';
import Project from './components/Project.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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