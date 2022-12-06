import React, { useContext } from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'; import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
export default function Navbar() {
    const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
    const { user } = useContext(AuthContext);
    console.log(darkMode)
    return (
        <div className='navbar'>
            <div className='navbar--left'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span>BXsocial</span>
                </Link>
                <HomeOutlinedIcon />
                {
                    (() => {
                        if (darkMode) {
                            return <WbSunnyOutlinedIcon onClick={toggleDarkMode} />
                        } else {
                            return <DarkModeOutlinedIcon onClick={toggleDarkMode} />
                        }
                    })()
                }
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
                    <img src={user?.profilePicture} alt="user-avatar" />
                    <span>{user?.name}</span>
                </div>
            </div>
        </div>
    )
}
