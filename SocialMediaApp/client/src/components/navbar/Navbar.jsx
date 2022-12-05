import React from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'; import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar--left'>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span>BXsocial</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className='navbar--left-search'>
                    <SearchOutlinedIcon />
                    <input type={'text'} placeholder='search' />
                </div>
            </div>
            <div className='navbar--right'>

                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className='navbar--right-user'>
                    <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar"/>
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}
