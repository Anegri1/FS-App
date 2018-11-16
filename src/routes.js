import React from "react"
import Cart from "./Components/Cart/cart";
import Product from "./Components/Product/product";
import Homepage from "./Components/Homepage/home";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default () => (
    <Router>
        <Switch>
             <Route exact path="/" component={Homepage} />
             <Route path="/1" component={Cart}  />
                <Route path="/2" component={Product}  />
        </Switch>
    </Router>
        )