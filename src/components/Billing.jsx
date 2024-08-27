/* eslint-disable no-unused-vars */
import {apple,bill,google} from '../assets';
import styles,{layout} from "../style";
import React from 'react';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-5 "/>
        
        <div className="absolute x-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your 
          <br className='sm:block hidden'/>billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, officiis. Officiis ducimus cumque repudiandae numquam facere laboriosam autem fugiat illum impedit molestiae nostrum,
           tempora nulla possimus. Tempora eaque porro dicta? 
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-128px h-42px object-contain
          mr-5 cursor-pointer' />
          <img src={google} alt="google" className='w-128px h-42px object-contain
           cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing
