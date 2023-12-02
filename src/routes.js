import Home from './components/Home/Home';
import HomePage from './components/HomePage/HomePage';
import Wrapper from './components/Wrapper';


export const ROUTES = {
      HOMEPAGE: { 
        path: '/',
        exact: false,
        element: <HomePage />
      },

      HOME: { 
        path: '/test',
        exact: false,
        element: <Home />
      },
}