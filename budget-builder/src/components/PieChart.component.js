import React, { Component } from 'react';
//import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

export default class PieChart extends Component {

  constructor(props){
    super(props);
    this.state = {
      budgets: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/budgets/').then(response => {if(response.data.length>0){
      console.log(response);
      this.setState({
        budgets: response.data.map(budget => budget)
       
      })
    }else{
      this.setState({
        budgets: []
      })
    }})

    console.log(this.state.budgets.length);

  }
  render(){
    var labels  = this.state.budgets.map(budget => budget.budget);
    var budgetData = this.state.budgets.map(budget => budget.amount);
    var dynamicColors = function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
   };

   var color =  this.state.budgets.map(dynamicColors);
   var color2 =  this.state.budgets.map(dynamicColors);
   console.log(color);
    return (

      
      <div>
        <Pie
          data={{
          
            labels : labels,
            datasets: [
              {
                label: '# of votes',
                data: budgetData,
              dColor : color,
              

                borderColor: color2 ,
                borderWidth: 5,
              },
            
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    )

  }
}
