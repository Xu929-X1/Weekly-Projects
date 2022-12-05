import React from 'react'
import './leftbar.scss'

import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbar--container">
        <div className="leftbar--menu">
          <div className="leftbar--user">
            <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" />
            <span>John Doe</span>
          </div>

          <div className="leftbar--items">
            <div className="leftbar--item">
              <img src={Friends} alt="Friends-icon" />
              <span>Friends</span>
            </div>

            <div className="leftbar--item">
              <img src={Groups} alt="Groups-icon" />
              <span>Groups</span>
            </div>

            <div className="leftbar--item">
              <img src={Market} alt="Market-icon" />
              <span>Market</span>
            </div>

            <div className="leftbar--item">
              <img src={Watch} alt="Watch-icon" />
              <span>Watch</span>
            </div>

            <div className="leftbar--item">
              <img src={Memories} alt="Memories-icon" />
              <span>Memories</span>
            </div>
          </div>
          <hr></hr>
          <div className="leftbar--shortcuts">
            <div className="leftbar--items">
              <p>Your shortcuts</p>

              <div className="leftbar--item">
                <img src={Events} alt="Events-icon" />
                <span>Events</span>
              </div>
              <div className="leftbar--item">
                <img src={Gaming} alt="Gaming-icon" />
                <span>Gaming</span>
              </div><div className="leftbar--item">
                <img src={Gallery} alt="Gallery-icon" />
                <span>Gallery</span>
              </div><div className="leftbar--item">
                <img src={Videos} alt="Videos-icon" />
                <span>Videos</span>
              </div>
              <div className="leftbar--item">
                <img src={Messages} alt="Messages-icon" />
                <span>Messages</span>
              </div>

            </div>
          </div>

          <hr></hr>

          <div className="leftbar--others">
            <div className="leftbar--items">
              <p>Others</p>
              <div className="leftbar--item">
                <img src={Fund} alt="Fund-icon" />
                <span>Fund</span>
              </div>
              <div className="leftbar--item">
                <img src={Tutorials} alt="Tutorials-icon" />
                <span>Tutorials</span>
              </div>
              <div className="leftbar--item">
                <img src={Courses} alt="Courses-icon" />
                <span>Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
