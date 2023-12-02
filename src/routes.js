import Home from './components/Home/Home';
import HomePage from './components/HomePage/HomePage';



export const ROUTES = {
      HOMEPAGE: { 
        path: '/stockDetails',
        exact: false,
        element: <HomePage />
      },

      HOME: { 
        path: '/',
        exact: false,
        element: <Home />
      },
}