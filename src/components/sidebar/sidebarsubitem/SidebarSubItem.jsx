import React from 'react';

function SidebarSubItem({name, key}) {
    return (
        <li key={key}>
            <a href='http://localhost:3000'>{name}</a>
        </li>
    );
}

export default SidebarSubItem;