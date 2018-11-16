import React, { Component } from 'react';
import './home.css';
import Menu from '../menu'

class Home extends Component {
    render() {
        return (
            <div>


                <div className="box1">
                    <Menu class="menu" />
                    <div >
                        <h1 className="title">The CBDistillery</h1>
                        <h3 className="subscript">Relaxation/Calmness</h3>
                    </div>
                </div>


                <div className="box2">
                <p className="newP">Everyone knows that tetrahydrocannabinol, or THC, is the king chemical in marijuana: It's the psychoactive stuff that actually gets you high, and growers are consistently seeking ways to elevate its concentration in their ultra-potent strains.
                    Yet even as the race to produce more and more powerful marijuana continues at its breakneck pace, another crucial chemical in pot is having a moment, Cannabidiol (CBD). </p>
                    <p className="newP">While THC has been known to trigger panic attacks by modulating the neurotransmitters involved in a "fight-or-flight" response, CBD appears to do the opposite, easing anxiety and making us less likely to freak out.</p>
                </div>
                <div className="hempleaf">
                    <p className="p1">Unlike THC, CBD does not cause a high.</p>
                    <p>While many people enjoy the marijuana high, health professionals prefer treatments with minimal side effects.</p>
                    <p>CBD is non-psychoactive because it does not act on the same receptors as THC. These CB1 receptors are highly concentrated in the brain and are responsible for the mind-altering effects of THC.</p>
                </div>




                <div>

                </div>


            </div>



        );
    }
}

export default Home;


