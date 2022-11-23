import { useState } from "react"
import './leftBar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const LeftBar = () => {

    const [seeMore, setSeeMore] = useState(false)

    const switchSee = (e) => {
        e.preventDefault();
        setSeeMore((prevseeMore) => !prevseeMore);
    }
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <a href="/profile/:id">
                        <div className="item">
                            <img src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/dc/dc3593940847428ac6f4d839c6e7687af4185649.jpg' alt='avatar' />
                            <span>Mark Neiman</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-friends" />
                            <span>Friends</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-groups" />
                            <span>Groups</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-marketplace" />
                            <span>Marketplace</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-watch" />
                            <span>Watch</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-memories" />
                            <span>Memories</span>
                        </div>
                    </a>
                </div>
                <div className="menu">
                    {!seeMore &&
                        <div className="item" onClick={switchSee}>
                            <KeyboardArrowDownIcon className='arrow' />
                            <span>See more</span>
                        </div>}
                    {seeMore &&
                        <a href='#'>
                            <div className="item">
                                <div className="item-friends" />
                                <span>Friends</span>
                            </div>
                        </a>}
                    {seeMore &&
                        <a href='#'>
                            <div className="item">
                                <div className="item-groups" />
                                <span>Groups</span>
                            </div>
                        </a>}
                    {seeMore &&
                        <a href='#'>
                            <div className="item">
                                <div className="item-marketplace" />
                                <span>Marketplace</span>
                            </div>
                        </a>}
                    {seeMore &&
                        <a href='#'>
                            <div className="item">
                                <div className="item-watch" />
                                <span>Watch</span>
                            </div>
                        </a>}
                    {seeMore &&
                        <div className="item" onClick={switchSee}>
                            <KeyboardArrowUpIcon className='arrow' />
                            <span>See less</span>
                        </div>}
                </div>
                <hr />
                <div className="menu">
                    <a href='#'>
                        <div className="item">
                            <div className="item-friends" />
                            <span>Friends</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-groups" />
                            <span>Groups</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-marketplace" />
                            <span>Marketplace</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-watch" />
                            <span>Watch</span>
                        </div>
                    </a>
                    <a href='#'>
                        <div className="item">
                            <div className="item-memories" />
                            <span>Memories</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeftBar