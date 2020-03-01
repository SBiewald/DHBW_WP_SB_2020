import React, {Component} from 'react';
import './App.css';
import Nav_bar from './components/nav_bar';
import 'typeface-roboto';
import { BrowserRouter} from 'react-router-dom';
import Home from './components/home/home_full.jsx';
import Matching_recipes from './components/matching_recipes/matching_recipes_full';
import Recipe from './components/recipe/recipe_full';

class App extends Component{

  render(){
  return (
    <div>
      <header>
      <Nav_bar/>  
      </header>
      <BrowserRouter>
      </BrowserRouter>
    </div>
  );
}
}


export default App;

/*
      <Home/>
      <Matching_recipes/>
      <Recipe/>
      */