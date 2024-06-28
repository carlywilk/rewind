// https://swiperjs.com/element

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import testImage1 from "../../assets/images/test1.jpeg";
import testImage2 from "../../assets/images/test2.jpeg";
import testImage3 from "../../assets/images/test3.jpeg";
import testImage4 from "../../assets/images/test4.jpeg";
import testImage5 from "../../assets/images/test5.jpeg";
import testImage6 from "../../assets/images/test6.jpeg";
import testImage7 from "../../assets/images/test7.jpeg";

import "./Carousel.scss";

// register Swiper custom elements
register();

export function Carousel() {
    return (
        <section className="swiper">
            <swiper-container slides-per-view="3" space-between="20" scrollbar-clickable="true" mousewheel-invert="true">
                <swiper-slide> <img className="swiper__image" src={testImage1} alt="" /> </swiper-slide>
                <swiper-slide> <img className="swiper__image" src={testImage2} alt="" /> </swiper-slide>
                <swiper-slide> <img className="swiper__image" src={testImage3} alt="" /> </swiper-slide>
                <swiper-slide> <img className="swiper__image" src={testImage4} alt="" /> </swiper-slide>
                <swiper-slide> <img className="swiper__image" src={testImage5} alt="" /> </swiper-slide>
                <swiper-slide> <img className="swiper__image" src={testImage6} alt="" /> </swiper-slide>
                <swiper-slide> <img className="swiper__image" src={testImage7} alt="" /> </swiper-slide>
            </swiper-container>
        </section>
    );
}