import React, { Fragment } from 'react'
import styles from '../home/home.module.css'
import Nav from '../nav/Nav'; 
import SingUp from '../forms/Form';
import Form from '../forms/Form';

const Home = () => {
  
   return(
      <Fragment>
   
    <section id="home" className={styles.home}>
    <div className={styles.home_description}>
    <h1>The Gym Factory</h1>
    <p>Determination fuels my workouts, progress fuels my motivation</p>
    </div>
   <div className={styles.services}>
      <p>FREE WEIGHTS AREA</p>
      <p>WATER DISPENSER</p>
      <p>CARDIO AREA</p>
      <p>CYCLING STUDIO</p>
      <p>LOCKERS</p>
      <p>STRENGTH AREA</p>
      <p>LOUNGE</p>
   </div>
    </section>
    </Fragment>
   )
}
export default Home;