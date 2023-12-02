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
        
           <Route {...ROUTES.HOME} />
           <Route {...ROUTES.HOMEPAGE} />
       
           
          </Routes>
          {/* Uncomment the following line if RenderRemoteComponent is defined */}
          {/* <RenderRemoteComponent /> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
