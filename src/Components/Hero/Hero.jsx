import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero__left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero__hand__icon">
                    <p>New</p>
                    <img src={hand_icon} alt="handIcon"/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero__latest__button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrowIcon"/>
            </div>
        </div>
        <div className="hero__right">
            <img src={hero_image} alt='heroImage' />
        </div>
    </div>
  )
}
