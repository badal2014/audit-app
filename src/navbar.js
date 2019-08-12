import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="./#"> Home </Link></li>
          <li><Link to="./ChangePassword"> Change Password </Link></li>
         
        </ul>
      </div>
    )
  }
}
