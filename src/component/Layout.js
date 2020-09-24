import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from '../page/detail/Detail'
import Home from '../page/home/Home'
import Signin from '../page/signin/SingIn'
import Signup from '../page/signUp/Signup'
import Cart from '../page/cart/Cart'
import Admin from '../page/admin/Admin';
import Product from '../page/admin/Product';
import User from '../page/admin/User';
import ListOrder from '../page/admin/ListOrder';
import DashBoard from '../page/admin/DashBoard';
import Error from '../page/error/Error';
import 'react-loading-bar/dist/index.css'
import Header from '../common/Header'
import Footer from '../common/Footer'


const Layout = (props)=>{

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
                    <Route path="/admin-order" exact component={()=><ListOrder/>}/>
                    <Route path="/dashboard" exact component = {()=><DashBoard/>}/>
                    <Route component={() => <Error/>} />
                </Switch>
            </div>
        </Router>
        );
}
export default Layout;