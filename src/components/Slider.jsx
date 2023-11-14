import React from 'react';
import { Carousel } from 'antd';
import {RightCircleTwoTone, LeftCircleTwoTone} from "@ant-design/icons"

export default function Slider() {

    const onChange = (currentSlide) => {
       
      };

    return(
        <>
      <div className='container-slider'>
      <Carousel className='Carousel' afterChange={onChange}>
        <div>
        <img src="/src/components/img/sliderimg1.png" alt="" />
        </div>
        <div>
        <img src="/src/components/img/sliderimg2.png" alt="" />
        </div>
        <div>
        <img src="/src/components/img/sliderimg3.png" alt="" />
        </div>
    </Carousel>
      <LeftCircleTwoTone  onClick={ ()=>  (prev())} style={{position: "absolute", left: "120px", fontSize: "30px"}} />
      <RightCircleTwoTone onClick={ ()=>  (next())}  style={{position: "absolute", right: "120px", fontSize: "30px"}} />
      </div>
        </>
    )
}