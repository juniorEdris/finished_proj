import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
        <header style={headTitle}>
            <h1 >TODO List</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
        </div>
    )
}

const headTitle = {
    textAlign:'center',
    background:'#333',
    color:'#fff',
    padding:'40',
    textTransform:'uppercase'
}

const linkStyle = {
    color:'#fff',
}