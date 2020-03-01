import React, {Component} from 'react';
/*
import Recipes_with_b from './recipes_with_b/recipes_with_b';
import Recipes_without_b_full from './recipes_without_b/recipes_without_b_full';
*/

class Single_cocktail_element extends Component{
    render(){
        return(
            <div>
                <img 
                style={{
                    width: 200,
                    height: 200
                }} 
                src={require(`../../imgs/${this.props.cocktails.pic}`)}/>
                <h4>{this.props.cocktails.name}</h4>
                <p>
                    Ingredients: {this.props.cocktails.ingreds}
                </p>
            </div>
        );
    }
}

export default Single_cocktail_element;




























/* import React from "react";
import {Link} from "react-router-dom";

const Single_recipe_box = (props) => {
    const calculatePercentage = (props) => {
        if (props.state[props.name]) {
            let percentage = (props.state[props.name].length / props.cocktails[props.name][0].length) * 100;
            return percentage.toFixed(2)
        }
    };

    return (

<div className="Single_recipe_box">
    <Link to={{
        pathname: '/Recipe',
        state: {
            name: props.name,
            cocktails: props.cocktails,
            state: props.state
        }
    }}
    >
        <div className="Single_recipe_box">
            <div className="CocktailListElementDescription">
                <h2>{props.name}</h2>
                <h3>{calculatePercentage(props)}% of ingredients in stock</h3>
            </div>
            <div className="CocktailImage">
                <img className="img" src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
            </div>

        </div>
    </Link>
</div>


    );
};

export default Single_recipe_box; */