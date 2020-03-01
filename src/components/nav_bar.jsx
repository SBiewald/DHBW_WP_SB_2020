import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './nav_bar.css';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from "./home/home_full";
import Matching_recipes from "./matching_recipes/matching_recipes_full";
import Recipe from "./recipe/recipe_full";
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  root: {
    marginTop: 1,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50
  }
})

class Nav_bar extends Component {
  state = {
    auth: true
}

  render() {
    const {classes} = this.props;
    return(
      <div>
      <BrowserRouter>
      <AppBar position="sticky" elevation={0} class="nav_bar">
        <Toolbar>
          <Typography className={classes.flex} type="title" color="inherit">
            <ul>
            <li><Link to="/home/home_full">Home</Link></li>
            <li><Link to="/matching_recipes/matching_recipes_full">Matching Recipes</Link></li>
            <li><Link to="/recipe/recipe_full">Recipe</Link></li>
            </ul>
          </Typography>
          <div>
          </div>
        </Toolbar>
      </AppBar>

      <Switch>
        {this.state.auth} 
        <Route exact path="/home/home_full" component={Home} />
        <Route exact path="/matching_recipes/matching_recipes_full" component={Matching_recipes} />
        <Route exact path="/recipe/recipe_full" component={Recipe} />
        </Switch>
      </BrowserRouter>
        </div>  
    
    );
}
}
Nav_bar.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(Nav_bar);

/*
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
</>
        

<BrowserRouter>
<Switch>
<Route exact path="/home/home" component={Home} />
<Route exact path="/matching_recipes/matching_recipes_full" component={Matching_recipes} />
<Route exact path="/recipe/recipe_full" component={Recipe} />

                    <Link to="/home/home">Home</Link>
                    <Link to="/matching_recipes/matching_recipes_full">Matching_recipes</Link>
                    <Link to="/recipe/recipe_full">Recipe</Link>
                    */