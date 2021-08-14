import React, { Component } from 'react';
import axios from 'axios'
export default class addBudget extends Component {

constructor(props){
    super(props);

    this.onChangeBudget = this.onChangeBudget.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        budget : '',
        description: '',
        amount:0,

        budgets: []
    }
}

componentDidMount(){
    this.setState({budgets: ['testing','test2']})
}

onChangeBudget(e){
    this.setState({budget:e.target.value});
}

onChangeDescription(e){
    this.setState({description:e.target.value});
}

onChangeAmount(e){
    this.setState({amount:e.target.value});
}

onSubmit(e) {
    e.preventDefault();
    const addingBudget = {
        budget: this.state.budget,
        description: this.state.description,
        amount : this.state.amount
    }

    console.log(addingBudget);

    axios.post('http://localhost:8000/budgets/add',addingBudget).then(res => console.log(res.data));
    //window.location = '/'
}

render(){
    return (
        <div>
          <h3>Add to the Budget</h3>
          <form onSubmit={this.onSubmit}>
            <div class="form-row">
            <div class="form-group"> 
              <label>Budget: </label>
              <input  type="text"
                  required
                  class="form-control"
                  value={this.state.budget}
                  onChange={this.onChangeBudget}
                  />
            </div>
            </div>
            <div class="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  class="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>

            <div class="form-group"> 
              <label>Amount: </label>
              <input  type="text"
                  required
                  class="form-control"
                  value={this.state.amount}
                  onChange={this.onChangeAmount}
                  />
            </div>
            
    
            <div class="form-group">
              <input type="submit" value="Create Budget Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
}
