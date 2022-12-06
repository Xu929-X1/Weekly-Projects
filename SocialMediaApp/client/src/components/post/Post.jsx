import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import './post.scss'
export default function Post({ username }) {
    return (
        <div className='post'>
            <div className='post--header'>
                <div className="post--header-left">
                    <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                    <div>
                        <p>John Doe</p>
                        <p>1 minute ago</p>
                    </div>
                </div>
                <div className="post--header-right">

                    <MoreHorizOutlinedIcon />
                </div>
            </div>


            <div className="post--content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src = 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='post'/>

            </div>


            <div className="post--widget">
                <FavoriteBorderOutlinedIcon />
                <span>Likes</span>
                <ChatBubbleOutlineOutlinedIcon />
                <span>Comment</span>
                <ShareOutlinedIcon />
                <span>Share</span>
            </div>
        </div>
    )
}
