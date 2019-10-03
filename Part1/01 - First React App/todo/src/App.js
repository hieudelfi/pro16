import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "Hugh"
    }
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Hugh" ? "Bob" : "Hugh"
    })
  }
  render(){
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
        </h4>
        <button className="btn btn-primary m-2"
          onClick={ this.changeStateData }>
            Change User
          </button>
      </div>
    )
  }
}