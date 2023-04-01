import React from "react";
import Slider from "react-slick";
import css from './MiddleBlock.module.css'
import slider1 from '../../img/Rectangle_45.jpg'


export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const news = [{
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',
    image: slider1,  
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',
    image: slider1,  
  },{
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',
    image: slider1,  
    },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',
    image: slider1,  
    },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',
    image: slider1,  
    },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',
    image: slider1,  
  }  ]
  return (
    <div className="container" id="2">
              <h2 className='Title'>Новини  <div className='dotsWrapper'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </h2>
      <Slider {...settings}>
        {news.map((slide) => {
          return <div>
            <div className={css.ImgDescriptoin}>
            <img alt="src"src={slide.image} /> 
            <div className={css.titleDescription}>
              <h3 className={css.Description}>
              {slide.title}
            </h3>
            </div>
            </div>
          </div>
      })}
    </Slider>
    </div>
  );
}