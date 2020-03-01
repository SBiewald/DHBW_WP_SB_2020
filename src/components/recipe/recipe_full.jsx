import React, {Component} from 'react';

//this is the page that shows all full recipes
class Recipes extends Component{
    state = {}

    constructor(props){
        super(props);
        this.state={
            //all relevant information for the cocktails
            cocktail_list:[
                {name:"Negroni", ingreds: ["Campari, ", "Sweet Vermouth, ", "Gin"], recipe: "1 oz London dry gin, 1 oz sweet vermouth, 1 oz Campari. Stir with ice for 20-30 seconds. Strain into coupe glass. Garnish with orange peel.", pic: "negroni.jpg"},
                {name:"Gin & Tonic", ingreds: ["Gin, ", "Tonic"], recipe: "Gin (amount to preference), Tonic water (amount to preference). Pour over ice, garnish with lime wedge", pic: "gin_and_tonic.jpg"},
                {name:"Martini", ingreds: ["Gin, ", "Dry Vermouth", "Bitters"], recipe: "2 oz gin, 1 oz dry vermouth. Add contents to ice-filled mixing glass or metal shaker. Stir, don’t shake, for about 10 seconds. Strain into a coupe or cocktail glass and garnish with a lemon peel.", pic: "martini.jpg"},
                {name:"Manhattan", ingreds: ["Bourbon, ", "Sweet Vermouth", "Bitters"], recipe: "2 oz rye whiskey, 1 oz sweet vermouth, 2 dashes Angostura bitters. Stir the ingredients with cracked ice, then strain into in a chilled coupe. Garnish with an orange twist or brandied cherry (none of that cheap maraschino bullshit).", pic: "manhattan.jpg"},
                {name:"Daiquiri", ingreds: ["Rum, ", "Lime Juice", "Sugar"], recipe: "2 oz white rum, 1 oz fresh-squeezed lime juice, ¾ oz simple syrup. Combine ingredient in a mixing glass with ice and shake well. Strain into a coupe.", pic: "daiquiri.jpg"}
            ]

        }
    }
    render(){
        return(
            //show Name, Ingredients, Recipe and Picture of all Cocktails stored in cocktail_list
            <div>
                <h2>All Recipes</h2>
                {this.state.cocktail_list.map(cocktails => (
                <div>
                <h4>{cocktails.name}</h4>
                <img 
                style={{
                    width: 200,
                    height: 200
                }} 
                src={require(`../../imgs/${cocktails.pic}`)}/>
                <p>Ingredients: {cocktails.ingreds}</p>
                Preparation: {cocktails.recipe}
                </div>
                ))}
            </div>
        );
    }
}

export default Recipes;