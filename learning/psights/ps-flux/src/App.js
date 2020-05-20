import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import AboutPage from "./components/About";
import Header from "./components/common/Header";
import CoursesPage from "./components/courses/CoursesPage";
import {Route, Redirect, Switch} from 'react-router-dom';
import PageNotFound from "./components/common/PageNotFound";
import ManageCoursePage from "./components/courses/ManageCoursePage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar/>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/about" component={AboutPage}/>
                <Redirect from="/about-page" to="about"/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route path="/course/" component={ManageCoursePage}/>
                <Route component={PageNotFound}/>
            </Switch>

        </div>
    );

    /*   function getPage() {
           const route = window.location.pathname;
           if (route === "/about") {
               return (<AboutPage/>);
           } if(route==="/courses") {
               return (<CoursesPage/>);
           } else {
               return (<HomePage/>);
           }
       }*/


}

export default App;
