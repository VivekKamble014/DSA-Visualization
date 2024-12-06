import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../CSS/Home.css';
import arrayImage from './Images/array.png';
import searchingImage from './Images/searching.png'; // Import actual images
import linkedListImage from './Images/linked_list.png';
import queueImage from './Images/queue.png';
import treeImage from './Images/tree.png';
import stackImage from './Images/stack.png';
import sortingImage from './Images/sorting_image.png';
export default function Home_Section_2() {
  const cardsData = [
    {
      image: arrayImage,
      title: 'Array',
      description: 'An array is a data structure that stores a collection of elements, typically of the same data type, in a contiguous memory location.',
    },
    {
      image: searchingImage,
      title: 'Searching',
      description: 'Searching involves finding the position of a specific element within a data structure, such as an array or list, using algorithms like linear search or binary search.',
    },
    {
      image: linkedListImage,
      title: 'Linked List',
      description: 'A linked list is a data structure consisting of nodes, each containing data and a reference to the next node, allowing for efficient insertions and deletions.',
    },
    {
      image: queueImage,
      title: 'Queue',
      description: 'A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front.',
    },
    {
      image: treeImage,
      title: 'Tree',
      description: 'A tree is a hierarchical data structure with a root node and child nodes, where each node can have multiple children but only one parent, used for representing hierarchical relationships.',
    },
    {
      image: stackImage,
      title: 'Stack',
      description: 'A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, allowing elements to be added and removed only from the top.',
    },
    {
      image: sortingImage,
      title: 'Sorting',
      description: 'Sorting is the process of arranging elements in a specific order, typically ascending or descending, using algorithms like bubble sort, quicksort, and mergesort.',
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