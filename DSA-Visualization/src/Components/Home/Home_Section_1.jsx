import React from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom';

export default function Home_Section_1() {
  return (
    <div className='HomeSection-1'>
        <section className='HomeSection-1-content'>
                <h1>DSA Visualization</h1>
                
                <Link to="/Dashboard" className="btn-1">Start Learning</Link>

        </section>
    </div>
  )
}
