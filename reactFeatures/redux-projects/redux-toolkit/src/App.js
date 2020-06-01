import React from 'react';

import './App.css';


import {BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

import {DashboardPage} from "./features/posts/pages/DashboardPage";
import {PostsPage} from "./features/posts/pages/PostsPage";
import SinglePostPage from "./features/posts/pages/SinglePostPage";
import Navbar from "./features/posts/Navbar";
import BookmarkMainPage from "./features/bookmark/BookmarkMainPage";

function App() {
  return (
    <div className="App">
   {/*   <header className="App-header">
        <Counter />
      </header>*/}

      {/*  <div className="mt-5">
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/posts" component={PostsPage} />
                    <Route exact path="/posts/:id" component={SinglePostPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>*/}

        <BookmarkMainPage/>


    </div>
  );
}

export default App;
