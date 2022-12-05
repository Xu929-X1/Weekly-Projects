import React from 'react'
import './rightbar.scss'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="container">

        <div className="rightbar--card">
          <div className="rightbar--items">

            <p>Suggestions For You</p>

            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <span>John Doe</span>
              </div>

              <div className='rightbar--item-buttons'>
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>


            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <span>John Doe</span>
              </div>
              <div className='rightbar--item-buttons'>
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>

            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <span>John Doe</span>
              </div>
              <div className='rightbar--item-buttons'>
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>
        </div>


        <div className="rightbar--card">
          <div className="rightbar--items">
            <p>Latest Activities</p>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <span>John Doe</span>
                <span className='rightbar--item-user-activity'>Update avatar</span>
              </div>
              <div className="rightbar--item-time">
                <span>1 min ago</span>
              </div>
            </div>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <span>John Doe</span>
                <span className='rightbar--item-user-activity'>Update avatar</span>
              </div>
              <div className="rightbar--item-time">
                <span>1 min ago</span>

              </div>
            </div>
          </div>
        </div>


        <div className="rightbar--card">
          <div className="rightbar--items">
            <p>Online Friends</p>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <div className="rightbar--item-user-online"></div>
                <span>John Doe</span>
              </div>
            </div>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <div className="rightbar--item-user-online"></div>
                <span>John Doe</span>
              </div>
            </div>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <div className="rightbar--item-user-online"></div>
                <span>John Doe</span>
              </div>
            </div>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <div className="rightbar--item-user-online"></div>
                <span>John Doe</span>
              </div>
            </div>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <div className="rightbar--item-user-online"></div>
                <span>John Doe</span>
              </div>
            </div>
            <div className="rightbar--item">
              <div className='rightbar--item-user'>
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
                <div className="rightbar--item-user-online"></div>
                <span>John Doe</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
