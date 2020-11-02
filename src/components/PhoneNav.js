import React,{useState} from 'react'
import { ReactComponent as LogoNav} from '../images/logo-nav.svg'
import { ReactComponent as Logo} from '../images/logo-bookmark.svg'
import { ReactComponent as Fb} from '../images/icon-facebook.svg'
import { ReactComponent as Twitter} from '../images/icon-twitter.svg'
import { ReactComponent as Hamburger} from '../images/icon-hamburger.svg'
import { ReactComponent as Close} from '../images/icon-close.svg'
import '../styles/phoneNav.scss'



const PhoneNav = () => {
    const [toggle,setToggle] = useState(false)

    const toggleNav = () => {
        setToggle(!toggle)
    }
    return (
        <div className='phone-nav'>
            <div className='phone-nav__display'>
                <div className="phone-nav__logo-container">
                    <Logo />
                </div>
                <div 
                className="phone-nav__hamburger-container"
                onClick={toggleNav}
                >
                    <Hamburger />
                </div>
            </div>
            <nav className={toggle ? 'phone-nav__tab-container open' : 'phone-nav__tab-container closed'}>
                <div className="phone-nav__header">
                    <LogoNav />
                    <Close onClick={toggleNav}/>
                </div>
                <ul className="phone-nav__list">
                    <li className="phone-nav__item"><a href="#" className="phone-nav__link">FEATURES</a></li>
                    <li className="phone-nav__item"><a href="#" className="phone-nav__link">PRICING</a></li>
                    <li className="phone-nav__item"><a href="#" className="phone-nav__link">CONTACT</a></li>
                    <li className="phone-nav__item"><button className="phone-nav__button">LOGIN</button></li>
                </ul>
                <div className="phone-nav__social-media">
                    <Fb />
                    <Twitter />
                </div>
            </nav>
        </div>
    )
}

export default PhoneNav