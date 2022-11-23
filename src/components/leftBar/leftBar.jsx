import React from 'react'
import './leftBar.scss'

import {
    Friends, Groups, Market, Watch, Memories, Events,
    Gaming, Gallery, Videos, Messages, Tutorials, Courses, Fund
} from '../../assests';

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/dc/dc3593940847428ac6f4d839c6e7687af4185649.jpg' alt='avatar' />
                        <span>Mark Neiman</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar