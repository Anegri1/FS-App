import React, { Component } from 'react';
import './product.css';
import Menu from '../menu'
import { connect } from 'react-redux'
import harnn from "./Harlequinn.png"
import harn from "./Harlequin.png"
import ACDC from "./ACDC.png"
import ACDCpic from "./ACDCPic.png"
import Cannatonic from "./Cannatonic.png"
import CannatonicPic from "./CannatonicPic.png"
import Ringo from "./Ringo.png"
import RingoPic from "./RingoPic.png"
import StephenHawking from "./StephenHawkingKush.png"
import StephenHawkingPic from "./StephenHawkingKushPic.png"
import Sweetandsour from "./SweetandSour.png"
import SweetandsourPic from "./SweetandSourPic.png"

class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="abcd">


                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>

                <Menu/>

                <div><h1 className="Products">Our CBD Strains</h1></div>

                <div>
                    <div className="row">
                    <div className="col-sm-3">
                    <h2 className="name">Harlequin</h2>
                        <img className="Pic1" src={harnn} alt=""/>
                        <img className="Pic2" src={harn} alt=""/>


                    </div>
                        <div className="para1">
                            <p>-One of the most popular CBD strains available </p>
                            <p>-5:2 CBD/THC ratio </p>
                            <p>-Sativa-dominant alertness with only mild euphoria</p>

                        </div>
                    </div>
                    <hr/>

                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-3">
                    <h2 className="name">Ringo's Gift</h2>
                            <img className="Pic1" src={Ringo} alt=""/>
                            <img className="Pic2" src={RingoPic} alt=""/>

                    </div>
                        <div className="para1">
                            <p>Named for activist, CBD specialist, and founder of SoHum Seeds, Lawrence Ringo</p>
                            <p>Hybrid cross of Harle-Tsu and ACDC</p>
                            <p>Keeps on giving to patients seeking a nearly full-on CBD-driven strain with an average ratio of 24:1</p>
                    </div>

                </div>
                    <hr/>
                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className="name">Sweet and Sour Widow</h2>
                            <img className="Pic1" src={Sweetandsour} alt=""/>
                            <img className="Pic2" src={SweetandsourPic} alt=""/>

                        </div>
                       <div className="para1">
                           <p>Lands in the middle ground with a 1:1 CBD/THC ratio</p>
                           <p>This even split offers first-time cannabis consumers an enjoyable, entry point to both THC and CBD without sending them into orbit</p>
                           <p>It also makes for a good medicine while being slightly euphoric and stoney</p>

                       </div>

                </div>
                    <hr/>
                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className="name">Stephen Hawking Kush</h2>
                            <img className="Pic1" src={StephenHawking} alt=""/>
                            <img className="Pic2" src={StephenHawkingPic} alt=""/>

                        </div>
                        <div className="para1">
                            <p>Offers mild, relaxing effects while doling out a healthy dose of CBD</p>
                            <p>This indica-dominant strain is one of the more unique CBD cuts out there</p>
                            <p>Offers both heady and soothing effects</p>
                        </div>

                        </div>
                    <hr/>

                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className="name">ACDC</h2>
                            <img className="Pic1" src={ACDC} alt=""/>
                            <img className="Pic2" src={ACDCpic} alt=""/>

                        </div>
                        <div className="para1">
                            <p>Heavy CBD-dominant strain. 20:1 CBD/THC ratio</p>
                            <p>An imperceptible amount of THC makes ACDC an outstanding companion for medicinal cannabis consumers</p>
                            <p>Great strain for those who are seeking to relieve tension, pain, or anxiety</p>
                        </div>
                    </div>
                    <hr/>

                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className="name">Cannatonic</h2>
                            <img className="Pic1" src={Cannatonic} alt=""/>
                            <img className="Pic2" src={CannatonicPic} alt=""/>

                        </div>
                        <div className="para1">
                            <p>Usually brings in a smaller CBD/THC split, ranging from 5:1 down to 1:1</p>
                            <p>This cannabinoid profile gives consumers a great deal of flexibility</p>
                            <p>Can be used as a medicine or an enjoyable, mild mannered strain to unwind with </p>
                        </div>
                    </div>
                    <hr/>
                </div>
                </div>
                </div>

            )
        }
    }
export default Product;
