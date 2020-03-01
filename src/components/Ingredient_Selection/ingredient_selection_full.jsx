import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


//Main page where user inputs ingredients and buying wish
class Ingredient_selection extends Component{

    constructor() {
        super()
        this.state = {
          ingredients: [],
          buy: false,
        ingredient_list:{
            "Campari": false,
            "Sweet Vermouth": false,
            "Gin": false,
            "Tonic": false,
            "Vodka": false,
            "Dry Vermouth": false,
            "Bourbon": false,
            "Bitters": false,
            "Rum": false,
            "Lime Juice": false,
            "Sugar": false,
        }
        }
      }
    
      onChangeIngreds(e) {
        // current array of ingredients
        const ingredients = this.state.ingredients
        let index
    
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to ingredients array
          ingredients.push(+e.target.value)
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = ingredients.indexOf(+e.target.value)
          ingredients.splice(index, 1)
        }
    
        // update the state with the new array of ingredients
        this.setState({ ingredients: ingredients })
      }

    render(){

        return(
            //iterate through ingredient list in state and display names
            //below added button to choose buying wish
            //submit button at the bottom to take given inputs and navigate to matching recipes
            <div>
                    <h1>Ingredient Selection</h1>             
            <body>
        <FormControl component="fieldset">
        <FormLabel component="legend">Choose your Ingredients</FormLabel>
            {Object.keys(this.state.ingredient_list).map(function (key, index) {
                return <FormControlLabel
                control={<Checkbox onChange={this.onChangeIngreds.bind(this)} value={key} />}
                label={key}/>
            }, this)}
        </FormControl>
            <p>Do you want to buy the ingredients?</p>
            <FormControl variant="outlined">
            <InputLabel>
            </InputLabel>
            <Select
                native
                onChange={handleChangeBuy => {this.setState({buy: handleChangeBuy.target.value})}}
                autoWidth>
                <option value=""/>
                <option value= {true} >Yes</option>
                <option value= {false} >No</option>
            </Select>
            </FormControl>
            <br/>
            <Link to={{
                        pathname: '/matching_recipes/matching_recipes_full',
                        state: {
                            ingredients: this.state.ingredients,
                            buy: this.state.buy
                        }}}
                    ><Button variant="contained" color="primary">Submit </Button></Link>

            </body>
            </div>
        );
    }
}

export default Ingredient_selection;
