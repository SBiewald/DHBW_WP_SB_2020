import React, {Component} from 'react';

//This Component dictates how information about cocktails is displayed on the matching recipes page

class Single_cocktail_element extends Component{
    render(){
        return(
            //use standardized picture size
            <div>
                <h4>{this.props.cocktails.name}</h4>
                <img 
                style={{
                    width: 200,
                    height: 200
                }} 
                src={require(`../../imgs/${this.props.cocktails.pic}`)}/>
                <p>
                    Ingredients: {this.props.cocktails.ingreds}
                </p>
            </div>
        );
    }
}
export default Single_cocktail_element;
