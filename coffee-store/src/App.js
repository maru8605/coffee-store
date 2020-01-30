import React from 'react';
import Header from '../src/sections/Header/Header';
import SelectType from '../src/sections/SelectType/SelectType';
import OurStory from '../src/sections/OurStory/OurStory';
import FreshBean from '../src/sections/FreshBean/FresBean';
import GreatCoffee from '../src/sections/GreatCoffee/GreatCoffee';
import BestCoffeeShop from '../src/sections/BestCoffeeShop/BestCoffeeShop';
import ThreeImg from '../src/sections/ThreeImg/ThreeImg';
import LatestFromBlog from '../src/sections/LatestFromBlog/LatestFromBlog';
import Footer from '../src/sections/Footer/Footer';

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
       <ThreeImg></ThreeImg>
       <LatestFromBlog></LatestFromBlog>
       <Footer></Footer>
     </div>
    </div>
  );
}

export default App;