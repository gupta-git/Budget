import React, { Component } from 'react';
import axios from 'axios'
export default class addBudget extends Component {

constructor(props){
    super(props);

    this.onChangeBudget = this.onChangeBudget.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        budget : '',
       
    }
}

componentDidMount(){
    //this.setState({budgets: ['testing','test2']})
}

onChangeBudget(e){
    this.setState({budget:e.target.value});
}


onSubmit(e) {
    e.preventDefault();
    const deletingBudget = {
        budget: this.state.budget
    }
    
    console.log(deletingBudget);
    // { data: { answer: 42 } }
    axios.delete('http://localhost:8000/budgets/delete',{ data: { budget: this.state.budget } }).then(res => console.log(res.data));
    //window.location = '/'
}

render(){
    return (
        <div>
          <h3>Delete Budget</h3>
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
              <input type="submit" value="Create Budget Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
}
