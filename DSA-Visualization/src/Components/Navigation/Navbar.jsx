import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setIsSearching(query.length > 0);
    };

    const dataStructureItems = [
        { name: 'Array', link: '/data-structure/array' },
        { name: 'Stack', link: '/data-structure/stack' },
        { name: 'Queue', link: '/data-structure/queue' },
        { name: 'Linked List', link: '/data-structure/linked-list' },
        { name: 'Tree', link: '/data-structure/tree' },
        { name: 'Graph', link: '/data-structure/graph' }
    ];

    const algorithmItems = [
        { name: 'Sorting', link: '/data-structure/sorting' },
        { name: 'Searching', link: '/data-structure/searching' }
    ];

    const allItems = [...dataStructureItems, ...algorithmItems];

    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Search Query:", searchQuery); // Debugging log
    console.log("Filtered Items:", filteredItems); // Debugging log

    return (
        <div className='Second-navbar'>
            <div className="Second-navbar-contant">
                <div className="Second-navbar-heading">
                    <Link to="/Home">DSA Visualization</Link>
                </div>
                <div className="Second-navbar-contant-menu">
                    {location.pathname === '/Home' ? (
                        <>
                            <Link to="/Home">Home</Link>
                            <a href="./Home_Section_3.jsx">About</a>
                            <Link to="/contact">Contact</Link>
                        </>
                    ) : (
                        <>
                            <div className="dropdown">
                                <span>Data Structure</span>
                                <div className="dropdown-content">
                                    {dataStructureItems.map((item, index) => (
                                        <Link key={index} to={item.link}>{item.name}</Link>
                                    ))}
                                </div>
                            </div>
                            <div className="dropdown">
                                <span>Algorithms</span>
                                <div className="dropdown-content">
                                    {algorithmItems.map((item, index) => (
                                        <Link key={index} to={item.link}>{item.name}</Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {/* Search Feature Positioned at the End */}
                <div className="search-container">
                    <span><FaSearch size={30}/></span>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                        className="search-bar"
                    />
                    {isSearching && filteredItems.length > 0 && (
                        <div className="search-results">
                            {filteredItems.map((item, index) => (
                                <Link key={index} to={item.link}>{item.name}</Link>
                            ))}
                        </div>
                    )}
                    {/* Optional: Show a message if no results found */}
                    {isSearching && filteredItems.length === 0 && (
                        <div className="no-results"></div>
                    )}
                </div>
            </div>
        </div>
    );
}