import React from 'react'
import { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/authContext'
export default function Stories() {
    const { user } = useContext(AuthContext)
    //dummy data: 
    const data = [
        {
            name: "John Doe",
            id: 1,
            img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "John Doe",
            id: 2,
            img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "John Doe",
            id: 3,
            img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "John Doe",
            id: 4,
            img: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <div className='stories'>
            
            <div className="story" key={user?.id}>
                <img src={user?.profilePicture} alt='user story' />
                <span>{user?.name}</span>
                <button>+</button>
            </div>  
            {
                data.map((story) => {
                    return (
                        <div className="story" key={story.id}>
                            <img src={story.img} alt='friend story' />
                            <span>{story.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
