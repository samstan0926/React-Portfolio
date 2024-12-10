import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorPage from '../../src/components/ErrorPage.jsx';
import AboutMe from '../../src/components/AboutMe.jsx';
import Project from '../../src/components/Project.jsx';
import Resume from '../../src/components/Resume.jsx';
import Contact from '../../src/components/Contact.jsx';

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