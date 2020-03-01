import React, {Component} from 'react';
import Single_cocktail_element from '../single_cocktail_element';


class Cocktails_with_b extends Component{
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
                {this.state.cocktail_list.map(cocktails => (
                <div>
                <Single_cocktail_element cocktails={cocktails}/>
                <p>Matching Rate: {2 * 100 / cocktails.ingreds.length}%</p>
                </div>
                ))}
                
            </div>
        );
    }
}

export default Cocktails_with_b;