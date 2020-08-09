import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from '@testing-library/react';
import Detail from '../page/detail/Detail'
import Home from '../page/home/Home'
import Signin from '../page/signin/SingIn'
import Signup from '../page/signUp/Signup'
import Cart from '../page/cart/Cart'
import Admin from '../page/admin/Admin';
import Product from '../page/admin/Product';
import User from '../page/admin/User';
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
                    <Route path="/admin" exact component={() => <Admin/>} />
                    <Route path="/admin-products" exact component={() => <Product/>} />
                    <Route path="/admin-users" exact component={() => <User/>} />

                </Switch>
            </div>

        </Router>
        );
}
export default Layout;