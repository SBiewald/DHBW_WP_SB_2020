import React, {Component} from 'react';
import './App.css';
import Nav_bar from './components/nav_bar';
import 'typeface-roboto';
import { BrowserRouter} from 'react-router-dom';


class App extends Component{

  render(){
  return (
    //always show navigation bar and utilize the Browser Router
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
