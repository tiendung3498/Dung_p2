import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from '@testing-library/react';
import Detail from '../page/detail/Detail'
import Home from '../page/home/Home'
const Layout = ()=>{
        return(
            <Router>
            <div className="layout--app">
               
                <Switch>
                    <Route path="/" exact component={() => <Home/>} />
                    <Route path="/detail" exact component={() => <Detail/>} />


                    {/* <Route component={() => <NotFound/>} /> */}
                </Switch>
            </div>

        </Router>
        );
}
export default Layout;