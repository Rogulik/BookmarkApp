import React from 'react'
import '../styles/footer.scss'
import { ReactComponent as Logo } from '../images/logo-white.svg'
import { ReactComponent as Fb } from '../images/icon-facebook.svg'
import { ReactComponent as Twitter } from '../images/icon-twitter.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <div className="footer__logo">
                 <Logo />
                </div>
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">FEATURES</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">PRICING</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">CONTACT</a></li>
                </ul>
            </nav>
            <div className="footer__social-media">
                <Fb className="footer__icon"/>
                <Twitter className="footer__icon"/>
            </div>
        </footer>
    )
}

export default Footer
