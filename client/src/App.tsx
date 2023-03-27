import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import apollo from './apollo/index';

import BoardViewPage from './pages/BoardViewPage/BoardViewPage';
import BoardWritePage from './pages/BoardWritePage/BoardWritePage';

function App() {
  return (
    <ApolloProvider client={apollo}>
      <Router>
        <Routes>
          <Route path='/' element={<BoardViewPage />} />
          <Route path='/write' element={<BoardWritePage />}/>
        </Routes>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
