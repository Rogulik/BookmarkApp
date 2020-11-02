import React from 'react'
import '../../styles/tab.scss'

const CustomTab = ({header,text,children}) => {
    return (
        <div className="tab__container">
            <div className="tab__box">
                <div className="tab__image-container">
                    { children }
                </div>
                <div className="blue-bg--other"></div>
                </div>
                <div className="tab__text-box">
                    <h2 className="heading-2">{ header }</h2>
                    <p className="tab__text">
                            { text }
                    </p>
                    <button className="btn">More info</button>
                </div>
        </div>
    )
}

export default CustomTab
