import React from 'react';
import img1 from '../../../assets/Banner/1.jpg';
import img2 from '../../../assets/Banner/2.jpg';
import img3 from '../../../assets/Banner/3.jpg';
import img4 from '../../../assets/Banner/4.jpg';
import img5 from '../../../assets/Banner/5.jpg';
import img6 from '../../../assets/Banner/6.jpg';
import img7 from '../../../assets/Banner/7.jpg';
import img8 from '../../../assets/Banner/8.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        id: 1,
        prev: 8,
        next: 2
    },
    {
        image: img2,
        id: 2,
        prev: 1,
        next: 3
    },
    {
        image: img3,
        id: 3,
        prev: 2,
        next: 4
    },
    {
        image: img4,
        id: 4,
        prev: 3,
        next: 5
    },
    {
        image: img5,
        id: 5,
        prev: 4,
        next: 6
    },
    {
        image: img6,
        id: 6,
        prev: 5,
        next: 7
    },
    {
        image: img7,
        id: 7,
        prev: 6,
        next: 8
    },
    {
        image: img8,
        id: 8,
        prev: 7,
        next: 1
    },

]

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                {
                    bannerData.map((slide) => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;