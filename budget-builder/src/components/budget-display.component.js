import React, { Component } from 'react';
import Home from "./home.component";
import PieChart from "./PieChart.component";


export default class BudgetDisp extends Component {

    constructor()
    {
        super();
        this.state = {
            name : "jaiydev"
        }   
    }
  
    display  = () =>{ 
       console.log(this.state.name)
        return this.state.name;
    }
render(){
    return(
        
        <div>
            <p>this is it the BudgetDisp!! {this.state.name}</p>
            
            <PieChart /> 
        

        </div>
  
    )
}
}