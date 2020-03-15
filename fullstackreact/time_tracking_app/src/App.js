import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TimerDashboard} from './TimerDashboard';
import {Timer} from "./Timer";
import {TimerList} from "./TimerList";


export default class App extends Component {

  render() {
    return (
    <div className="container ">
      <div className="  align-items-center" >
        <h1>Timer List</h1>
        <TimerDashboard/>
      </div>



    </div>

    )}
}
