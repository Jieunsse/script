import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Error from '../Page/Error/Error';
import Main from '../Page/Main/Main';

const Router = createBrowserRouter([
    {
      path:'/',
      element: <Root />,
      errorElement: <Error/>,
    },
    {
      path:'home',
      element: <Main />,
    },
]);

export default Router;