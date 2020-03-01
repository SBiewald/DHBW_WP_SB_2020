import React, {Component} from 'react';
import Ingred_selection from './ingred_selection';
import Buying_choice from './buying_choice';
import Button from '@material-ui/core/Button';
/*
import Buying_choice from './buying_choice';
*/

class Home extends Component{
    state = {
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Ingredient Selection</h1>              
                    
                </header>
            <body>
                <Ingred_selection/>
                Do you want to buy the ingredients?
                <Buying_choice/>

                <Button variant="contained" color="primary" href="/matching_recipes/matching_recipes_full">
                    Submit
                </Button>

            </body>
            </div>
        );
    }
}

export default Home;
