import React from 'react';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import Votes from './components/Votes';
import Vote from './components/Vote';

function App() {

  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="votes" element={<Votes />}>
                  <Route path=":voteId" element={<Vote />}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
