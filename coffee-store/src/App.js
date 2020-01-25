import React from 'react';
import Header from '../src/sections/Header/Header';
import SelectType from '../src/sections/SelectType/SelectType';
import OurStory from '../src/sections/OurStory/OurStory';

import './App.css';


function App() {
  return (
    <div>
     <div className="App" >
      <Header></Header>
       <SelectType> </SelectType> 
       <OurStory></OurStory>
     </div>
    </div>
  );
}

export default App;