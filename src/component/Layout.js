import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from '@testing-library/react';
import Detail from '../page/detail/Detail'
import Home from '../page/home/Home'
import Signin from '../page/signin/SingIn'
import Signup from '../page/signUp/Signup'
import Cart from '../page/cart/Cart'
const Layout = ()=>{
        return(
            <Router>
            <div className="layout--app">               
                <Switch>
                    <Route path="/" exact component={() => <Home/>} />
                    <Route path="/detail" exact component={() => <Detail/>} />
                    <Route path="/Signin" exact component={() => <Signin/>} />
                    <Route path="/Signup" exact component={() => <Signup/>} />
                    <Route path="/cart" exact component={() => <Cart/>} />

                </Switch>
            </div>

        </Router>
        );
}
export default Layout;