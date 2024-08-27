/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "./style";
import { Navbar,Hero,Billing,CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
 } from './components';



const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>

      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing/>
          <CardDeal/>
          <Business/>
          <Clients/>
          <CTA/>
          <Stats/>
          
          <Testimonials/>
          
          <Footer/>
        </div>

      </div>


    </div>
  )
}

export default App;
