import React, {Component} from 'react';
import Cocktails_without_b from "./cocktails_without_b/cocktails_without_b_full";
import Cocktails_with_b from "./cocktails_with_b/cocktails_with_b_full";
/*
import Recipes_with_b from './recipes_with_b/recipes_with_b';
import Recipes_without_b_full from './recipes_without_b/recipes_without_b_full';
*/

class Matching_recipes extends Component{
    state = {
        buy: true
    };
    render(){
        return(
            <div>
                {this.state.buy ? <Cocktails_with_b/> : <Cocktails_without_b/>}
            </div>
        );
    }
}

export default Matching_recipes;