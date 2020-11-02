import React from 'react'
import { ReactComponent as IllustrationHero } from '../images/illustration-hero.svg'
import '../styles/hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <header className="hero__container">
                <h1 className="hero__header heading-1">A Simple Bookmark Manager</h1>
                <p className="hero__text">
                    A clean website interface to organize your favourite websites.
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="hero__box">
                    <button className="btn">Get it on Chrome</button>
                    <button className="btn btn--grey">Get it on Firefox</button>
                </div>
            </header>
            <div className="hero__container">
                <IllustrationHero className="hero__pic"/>
            </div>
            <div className="blue-bg"></div>
        </section>
    )
}

export default Hero
