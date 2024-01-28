import React from 'react';
import * as Icons from '@mui/icons-material';
import SidebarSubItem from '../sidebarsubitem/SidebarSubItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function SidebarItem({name, icon, key, subitems}) {
    return (
        <li key={key}>
            <div className='icon-link'>
                <a href='http://localhost:3000'>
                    {React.createElement(Icons[icon])}
                    <span className="link-name">{name}</span>
                </a>
                {
                (subitems?.length > 0) &&
                    <ArrowDropDownIcon /> 
                }
            </div>
            <ul className={`sub-menu ${(subitems?.length === 0) ? 'blank' : ''}`}>
                <li key={key}>
                    <a className="link-name" href='http://localhost:3000'>{name}</a>
                </li>
            {
                (subitems?.length > 0) &&
                subitems.map(
                    (item, index) => <SidebarSubItem key={index} name={item.name}></SidebarSubItem>
                )
            }
            </ul>
        </li>
    );
}

export default SidebarItem;