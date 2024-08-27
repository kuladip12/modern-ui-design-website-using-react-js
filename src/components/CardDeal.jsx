import {card} from '../assets';
import styles ,{layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Find a better card default
        <br className='sm:block hidden'/>in few easy steps.</h2>
      <p className={`${styles.paragraph} mx-w-[480px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem unde eos blanditiis, architecto corrupti, repellat voluptates voluptatibus aperiam, quis fuga consequuntur. 
        Itaque, modi voluptatem enim aut vero ad optio!.</p>
        <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]'/>
    </div>
    
    </section>
  )
}

export default CardDeal
