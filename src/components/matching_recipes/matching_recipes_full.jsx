import React, {Component} from 'react';
import Cocktails_without_b from "./cocktails_without_b/cocktails_without_b_full";
import Cocktails_with_b from "./cocktails_with_b/cocktails_with_b_full";
import Error_message from "./error_page";

class Matching_recipes extends Component{
    state = {
        buy: true,
        no_matches: false
    };
    render(){
        return(
            //if no matching recipes found display error
            //display different page depending on if users wants to buy ingredients or not
            <div>
                {this.state.no_matches ? <Error_message/> : null}

                {this.state.buy ? <Cocktails_with_b/> : <Cocktails_without_b/>}
            </div>
        );
    }
}

export default Matching_recipes;