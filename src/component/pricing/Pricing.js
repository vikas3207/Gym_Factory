import React from "react";
import Styles from '../pricing/pricing.module.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
function Pricing () {
    return(
        <section id ="pricing" className={Styles.Pricing}>
        <h2> Membership</h2>
        <div className={Styles.pricing_container}>
        <div className={Styles.card_one}>
        <div className={Styles.plan_price}>
        <h5>Day Pass</h5>
        <h1><span className={Styles.dollar_symbol}>$</span> 20 </h1>
        <p>/10 days</p>
        </div>
        <div className={Styles.plan_description}>
        <div><AiOutlineCheckCircle /> <span>10 Days</span></div> 
        <div><AiOutlineCheckCircle /> <span>24 hours</span></div>  
        <div><AiOutlineCheckCircle /> <span>Free gym access</span></div>
        </div>
        <button type="button" className={Styles.pricing_btn}>Get Started</button>
        </div>
        <div className={`${Styles.card_one} ${Styles.card_two}`}>
        <div className={Styles.plan_price}>
        <h5>Month to Month</h5>
        <h1><span className={Styles.dollar_symbol}>$</span> 90 </h1>
        <p>/Month</p>
        </div>
        <div className={Styles.plan_description}>
        <div><AiOutlineCheckCircle /> <span>$99 Joing Fees</span></div> 
        <div><AiOutlineCheckCircle /> <span>No Contract</span></div>  
        <div><AiOutlineCheckCircle /> <span>Free gym access</span></div>
        <div><AiOutlineCheckCircle /> <span>Traning Free</span></div>
        <div><AiOutlineCheckCircle /> <span>1 Group Classes</span></div>
        </div>
        <button type="button" className={Styles.pricing_btn} style={{background:"green",color:"#fff"}}>Get Started</button>
        </div>
        <div className={Styles.pricing_information}>
        <h5>From punch pass to month or annual</h5>
        <p>Fitness motivation is nothing but that eagerness to stay fit. So, making a plan and setting a goal will mean nothing if you do not want to do it for it should come from within. This is why even after getting everything right, we tend to stop after a few days.</p>
        <h5>Each plan included</h5>
        <div className={Styles.plan_details}>
        
        <div><BsArrowRight /><span>$99 Joing Fees</span></div>
        <div><BsArrowRight /><span>No Contract</span></div>
        <div><BsArrowRight /><span>Free gym access</span></div>
        <div><BsArrowRight /><span>Traning Free</span></div>
        <div><BsArrowRight /><span>1 Group Classes</span></div>

        </div>
        </div>
        </div>
        </section>
    );
}
export default Pricing;