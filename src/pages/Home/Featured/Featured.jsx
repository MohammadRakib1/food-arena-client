import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white p-10 my-10'>
            <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum assumenda pariatur deserunt vitae, laboriosam corrupti in,
                        modi voluptas tenetur accusamus accusantium omnis asperiores sequi aliquam enim dolore ex impedit nam et ipsam.
                        Nihil repudiandae dicta, veritatis placeat assumenda aspernatur explicabo. Sunt, delectus alias.
                        Ex blanditiis minus doloremque voluptate illum reiciendis!</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;