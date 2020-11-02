import React from 'react'
import { ReactComponent as BgDots  } from '../../images/bg-dots.svg'
import '../../styles/card.scss'

const Card = ({ header, text, children }) => {
    return (
        <div className="card">
        <div className="card__logo">
            {children}
        </div>
        <div className="card__text-box">
            <h3 className="heading-3">{header}</h3>
            <p className="card__text">{text}</p>
        </div>
        <BgDots />
        <div className="card__button-box">
            <button className="btn card--button">Add & Install Extension</button>
        </div>
    </div>
    )
}

export default Card
