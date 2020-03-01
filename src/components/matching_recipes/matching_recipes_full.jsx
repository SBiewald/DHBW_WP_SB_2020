import React, {Component} from 'react';
import Cocktails_without_b from "./cocktails_without_b/cocktails_without_b_full";
import Cocktails_with_b from "./cocktails_with_b/cocktails_with_b_full";

class Matching_recipes extends Component{
    state = {
        buy: true,
        no_matches: false
    };
    show_error = () =>{
        if (this.no_matches){
            return "Sorry no matching Cocktails could be found. Return to Home and start over or choose the option to buy the ingredients"
        }
    }
    render(){
        return(
            <div>
                {this.state.buy ? <Cocktails_with_b/> : <Cocktails_without_b/>}
            </div>
        );
    }
}

export default Matching_recipes;