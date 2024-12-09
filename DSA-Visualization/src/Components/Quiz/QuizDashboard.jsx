import React from 'react';
import Navbar from '../Navigation/Navigation';
import '../CSS/QuizDashboard.css';

export default function QuizDashboard() {
  return (
    <div>
      <Navbar />
      <div className='QuizNavbar'>
        <div className='left-corner'>
          <h4>Welcome Vivek</h4>
        </div>
        <div className='right-corner'>
          <h4>Rank: 001</h4>
        </div>
      </div>

      <div className='cards-container'>
        <div className='card'>
          <img src='image1.jpg' alt='Card 1' />
          <h3>Card 1</h3>
          <p>Some text for card 1.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image2.jpg' alt='Card 2' />
          <h3>Card 2</h3>
          <p>Some text for card 2.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image3.jpg' alt='Card 3' />
          <h3>Card 3</h3>
          <p>Some text for card 3.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
        <div className='card'>
          <img src='image4.jpg' alt='Card 4' />
          <h3>Card 4</h3>
          <p>Some text for card 4.</p>
          <button>Start Now</button>
        </div>
      </div>
    </div>
  );
}