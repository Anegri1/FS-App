import React, { Component } from 'react';
import { connect } from 'react-redux'
import './cart.css';
import Menu from '../menu'

class Cart extends Component {
    render() {
        return (
            <div className="cbd">
                <Menu />
                <hr/>


                <div className="oil">
                    <div className="seeds">
                    <h1>Type of seed</h1>
                </div>
                    <div className="typeofseed">
                <p>Harlequin</p>
                    <div className="price">
                    <p>Quantity (seeds)</p>
                    <input  type="number" min="0"/>
                    <input type="submit" name="Add To Cart" value="Add To Cart"/>
                </div>
                    </div>
                </div>
            <div className="strains">

                <div className="typeof">



                <div className="price">
                    <p>Quantity (seeds)</p>
                    <input  type="number" min="0"/>
                    <input type="submit" name="Add To Cart" value="Add To Cart"/>
                </div>


                </div>

            </div>
                </div>

        );
    }
}






export default Cart;