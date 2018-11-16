import React, {Component} from 'react'
import { Link } from 'react-router-dom'



class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <p className="color">
                <Link to="/1">Shop</Link> | <Link to="/2">Product</Link> | <Link to="/">Home</Link>
                </p>
            </div>
        );
    }
}






export default Menu;