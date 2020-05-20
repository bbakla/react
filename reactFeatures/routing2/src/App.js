import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/home";
import Products from "./components/products";
import {Category} from "./components/category";
import {CategoryItem} from "./components/CategoryItem";
import {Users} from "./components/users";
import Post from "./components/post";
//import Category from "./components/category";


function App() {

  return (

      <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/post/hello-world">Post</Link>
                  </li>
                  <li>
                      <Link to="/users/7456/xys12">Users</Link>
                  </li>
                  <li>
                      <Link to="/category">Category</Link>
                  </li>
              </ul>
          </nav>
          <Switch>
              <Route path="/category" component={Category} />
              <Route path="/post/:slug" component={Post} />
              <Route path="/users/:id/:hash">
                  <Users />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </div>

  );
}

export default App;
