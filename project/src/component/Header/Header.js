import React from 'react';
import "./Header.css";
import CompanyContacts from './CompanyContacts/CompanyContacts';
import HeaderSearch from './HeaderSearch/HeaderSearch';
//import HeaderCategories from './HeaderCategories/HeaderCategories';

const Header = () => {
    return (
        <header className='header'>
            <CompanyContacts />
            <HeaderSearch/>
        </header>
    );
}

export default Header;
