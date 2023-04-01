import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
// import { Lightbox } from 'yet-another-react-lightbox/*'
import slider1 from '../../img/Rectangle_56.jpg'
import slider2 from '../../img/Rectangle_57.jpg'
import slider3 from '../../img/Rectangle_60.jpg'
import slider4 from '../../img/Rectangle_58.jpg'
import slider5 from '../../img/Rectangle_61.jpg'
import slider6 from '../../img/Rectangle_58.jpg'
import slider7 from '../../img/Rectangle_59.jpg'
import slider8 from '../../img/Rectangle_56.jpg'
import css from './GalleryBlock.module.css'

 
const GalleryBlock = () => {
  const Fotos = [
    { src: slider1 },
    { src: slider2 },
    { src: slider3 },
    { src: slider4 },
    { src: slider5 },
    { src: slider6 },
    { src: slider7 },
    { src: slider8 },
    { src: slider1 },
    { src: slider2 },
    { src: slider3 },
    { src: slider4 },
    { src: slider5 },
    { src: slider6 },
    { src: slider7 },
    { src: slider8 },
    { src: slider5 },
    { src: slider4 },
  ];
  const [index, setIndex] = useState(-1);

  return <div id='3'>
    <h2 className='Title'>Галерея <div className='dotsWrapper'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </h2>
    <div className={css.GalleryList}> 
    {Fotos.map(({ src }, index) => {
      return <div>
        <img alt="src" onClick = {()=>{setIndex(index)}} src={src}/>
      </div>
   })}
   </div>
    <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={Fotos}
    />
  </div>
}

export default GalleryBlock;