import React from 'react';
import './App.css';
import Nav_bar from './components/nav_bar';
import 'typeface-roboto';
import Home from './components/home/home_full.jsx';
import Matching_recipes from './components/matching_recipes/matching_recipes_full';
import Recipe from './components/recipe/recipe_full';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Nav_bar/>
        </nav>



      </header>
      <body>
      </body>
    </div>
  );
}

export default App;

/*
      <Home/>
      <Matching_recipes/>
      <Recipe/>
      */