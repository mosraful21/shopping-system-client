import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='max-w-[1440px] p-0 mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;