import React, { useState } from 'react';
import '../../styles/Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-container">
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#user-profile">User Profile</a></li>
                        <li><a href="#settings">Settings</a></li>
                        <li><a href="#notifications">Notifications</a></li>
                    </ul>
                </nav>
            </div>
            <button className="hamburger" onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
        </div>
    );
};

export default Sidebar;
