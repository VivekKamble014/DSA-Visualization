import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Css/Home.css';
import arrayImage from './Images/array.png';
import searchingImage from './Images/ARRAY.jpg'; // Import actual images
import linkedListImage from './Images/ARRAY.jpg';
import queueImage from './Images/ARRAY.jpg';
import treeImage from './Images/ARRAY.jpg';
import stackImage from './Images/ARRAY.jpg';

export default function Home_Section_2() {
  const cardsData = [
    {
      image: arrayImage,
      title: 'Array',
      description: 'Description for Card 1.',
    },
    {
      image: searchingImage,
      title: 'Searching',
      description: 'Description for Card 2.',
    },
    {
      image: linkedListImage,
      title: 'Linked List',
      description: 'Description for Card 3.',
    },
    {
      image: queueImage,
      title: 'Queue',
      description: 'Description for Card 4.',
    },
    {
      image: treeImage,
      title: 'Tree',
      description: 'Description for Card 5.',
    },
    {
      image: stackImage,
      title: 'Stack',
      description: 'Description for Card 6.',
    },
  ];

  return (
    <div className='HomeSection-2'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className='card'>
              <img src={card.image} alt={card.title} />
              <div className='card-content'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}