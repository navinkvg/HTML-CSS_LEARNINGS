import React from 'react';
import Home from './home';
import { Pic } from './img';


function App() {
  return (
    <div className="Application">
      {/* <Home /> */}

      <img src='https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg' height={600}></img>
      <img src='https://cdn.pixabay.com/photo/2024/05/19/05/38/ai-generated-8771533_1280.jpg' height={600}></img>
      <Pic />
      
      
    </div>
  );
}

export default App;
