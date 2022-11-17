import Link from 'next/link'
import React from 'react'

const NavItem = ({ href, text, active }) => {
    return (
        <p 
            className={`
                    nav-link ${active ? "active" : ""}
                `}
        >
            {text}
        </p>
    )
}

export default NavItem;