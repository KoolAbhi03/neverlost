import React from "react";
import {BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./core/Home";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/home" exact component={Home}/>
                <Route path="/chats" exact component={Home}/>
                <Route path="/groups" exact component={Home}/>
                <Route path="/search" exact component={Home}/>
                <Route path="/chats" exact component={Home}/>             
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;