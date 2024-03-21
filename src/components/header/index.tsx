import React from 'react';
import InfoNavBar from './Info-navbar';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className="w-full mx-auto top-0 left-0 right-0 bg-opacity-100">
            <InfoNavBar />
            <NavBar />
        </header>
    );
};

export default Header;