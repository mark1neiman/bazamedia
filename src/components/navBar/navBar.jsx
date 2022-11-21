import React from 'react'
import "./navBar.scss"
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>bazamedia</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='search...' />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/dc/dc3593940847428ac6f4d839c6e7687af4185649.jpg' alt='avatar' />
                    <span>Mark Neiman</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar