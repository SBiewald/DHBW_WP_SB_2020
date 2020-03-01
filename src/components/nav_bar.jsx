import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './nav_bar.css';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Ingredient_selection from "./Ingredient_Selection/ingredient_selection_full";
import Matching_recipes from "./matching_recipes/matching_recipes_full";
import Recipe from "./recipe/recipe_full";
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

//this is the navigation bar used to navigate between the three pages
//first some styling
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
      //Add list of the pages
      //then set up the Browser Router to navigate between pages
      <div>
      <BrowserRouter>
      <AppBar position="sticky" elevation={0} class="nav_bar">
        <Toolbar>
          <Typography className={classes.flex} type="title" color="inherit">
            <ul>
            <li><Link to="/Ingredient_Selection/ingredient_selection_full">Ingredient Selection</Link></li>
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
        <Route exact path="/Ingredient_Selection/ingredient_selection_full" component={Ingredient_selection} />
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