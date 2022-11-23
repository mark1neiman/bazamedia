import React from 'react'
import "./navBar.scss"

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from "../../context/darkMode";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const NavBar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);

    return (
        <div className='navbar'>
            <div className='left'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>bazamedia</span>
                </Link>
                {darkMode ? (<DarkModeIcon onClick={toggle} />) : (<LightModeIcon onClick={toggle} />)}
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='search...' />
                </div>
            </div>
            <div className="right">
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className="user">
                    <img src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/dc/dc3593940847428ac6f4d839c6e7687af4185649.jpg' alt='avatar' />
                </div>
            </div>
        </div>
    )
}

export default NavBar