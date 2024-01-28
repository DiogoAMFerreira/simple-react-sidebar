import { Bolt } from '@mui/icons-material';
import React from 'react';
import SidebarItem from './sidebaritem/SidebarItem';

function Sidebar({header, items}) {
    return (
        <div className='sidebar close'>
            <div className='logo-details'>
                <Bolt></Bolt>
                <span className="logo-name">{header}</span>
            </div>
            <ul className="nav-links">
                {items.map((item, index) =>
                    <SidebarItem key={index} name={item.name} icon={item.icon} subitems={item.subitems}></SidebarItem>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;