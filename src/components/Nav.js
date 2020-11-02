import React from 'react'
import { ReactComponent as BookmarkLogo } from '../images/logo-bookmark.svg'
import '../styles/nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <BookmarkLogo />
            </div>
            <div className="nav__container">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link">FEATURES</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">PRICING</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">CONTACT</a></li>
                    <li className="nav__item"><button className="btn btn--secondary">LOGIN</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
