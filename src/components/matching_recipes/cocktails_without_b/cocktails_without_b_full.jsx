import React, {Component} from 'react';
import Single_cocktail_element from '../single_cocktail_element';
/*
import Recipes_with_b from './recipes_with_b/recipes_with_b';
import Recipes_without_b_full from './recipes_without_b/recipes_without_b_full';
*/

class Cocktails_without_b extends Component{
    state = {
    }
    constructor(props){
        super(props);
        this.state={
            cocktail_list:[
                {name:"Negroni", ingreds: ["Campari, ", "Sweet Vermouth, ", "Gin"], recipe: "1 oz London dry gin, 1 oz sweet vermouth, 1 oz Campari. Stir with ice for 20-30 seconds. Strain into coupe glass. Garnish with orange peel.", pic: "negroni.jpg"},
                {name:"Gin & Tonic", ingreds: ["Gin, ", "Tonic"], recipe: "Gin (amount to preference), Tonic water (amount to preference). Pour over ice, garnish with lime wedge", pic: "gin_and_tonic.jpg"}
            ]

            
        }
    }

    render(){
        return(
            <div>
                    <h3>Matching Recipes</h3>
                    {this.state.cocktail_list.map(cocktails => <Single_cocktail_element cocktails={cocktails}/>
                        )}
            </div>
        );
    }
}

export default Cocktails_without_b;