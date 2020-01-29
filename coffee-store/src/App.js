import React from 'react';
import Header from '../src/sections/Header/Header';
import SelectType from '../src/sections/SelectType/SelectType';
import OurStory from '../src/sections/OurStory/OurStory';
import FreshBean from '../src/sections/FreshBean/FresBean';
import GreatCoffee from '../src/sections/GreatCoffee/GreatCoffee';
import BestCoffeeShop from '../src/sections/BestCoffeeShop/BestCoffeeShop';

import './App.css';


function App() {
  return (
    <div>
     <div className="App" >
      <Header></Header>
       <SelectType> </SelectType> 
       <OurStory></OurStory>
       <FreshBean></FreshBean>
       <GreatCoffee></GreatCoffee>
       <BestCoffeeShop></BestCoffeeShop>
     </div>
    </div>
  );
}

export default App;