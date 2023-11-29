import HomePage from './components/HomePage/HomePage';
import Wrapper from './components/Wrapper';


export const ROUTES = {
    WRAPPER: { 
        path: '/wrapper',
        exact: false,
        element: <Wrapper />
      },
      HOMEPAGE: { 
        path: '/',
        exact: false,
        element: <HomePage />
      },
}