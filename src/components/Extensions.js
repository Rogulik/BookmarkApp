import React from 'react'
import Card from './UI/Card'
import { ReactComponent as Chrome } from '../images/logo-chrome.svg'
import { ReactComponent as Firefox } from '../images/logo-firefox.svg'
import { ReactComponent as Opera  } from '../images/logo-opera.svg'
import '../styles/extensions.scss'

const Extensions = () => {
    return (
        <section className="extensions">
            <div className="extensions__text-box">
                <h2 className="heading-2">Download the extension</h2>
                <p className="extensions__text">
                    We've got more browsers in the pipeline. Please let us know if you've got   
                    a favourite you'd like us to prioritize.                 
                </p>
            </div>
            <div className="extensions__cards">
                <div className="extensions__box--1">
                    <Card header="Add to Chrome" text="Minimum version 62">
                        <Chrome className="extensions__logo"/>
                    </Card>
                </div>
                <div className="extensions__box--2">
                    <Card header="Add to Firefox" text="Minimum version 55">
                        <Firefox className="extensions__logo"/>
                    </Card>
                </div>
                <div className="extensions__box--3">
                    <Card header="Add to Opera" text="Minimum version 46">
                        <Opera className="extensions__logo"/>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Extensions
