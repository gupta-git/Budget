import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/budget" className="nav-link">Budget</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addBudget" className="nav-link">addBudget</Link>
          </li>
          <li className="navbar-item">
          <Link to="/deleteBudget" className="nav-link">deleteBudget</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}