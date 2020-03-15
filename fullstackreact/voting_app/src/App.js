import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {MDBContainer} from "mdbreact";
import {ProductList} from "./ProductList";

export default class App extends Component {

  render() {
    return (
        <div className="container-md">
            <h1>Popular Products</h1>
            <div className="card card-deck">

                <ProductList/>
            </div>

            </div>


    )

  }

}
