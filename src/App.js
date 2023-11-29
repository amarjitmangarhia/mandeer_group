import React, { Suspense } from 'react';
import { Routes, Route , BrowserRouter} from 'react-router-dom';


import { ROUTES } from './routes';
import ContentLoader from './components/ContentLoader';

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<ContentLoader />}>
          <Routes>
            {/* 
              Assuming ROUTES.WRAPPER is an object containing route props.
              Adjust the route definition based on your ROUTES structure.
            */}
           <Route {...ROUTES.WRAPPER} />
          </Routes>
          {/* Uncomment the following line if RenderRemoteComponent is defined */}
          {/* <RenderRemoteComponent /> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
