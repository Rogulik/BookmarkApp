import React from 'react'
import '../styles/faq.scss'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const items = [
    {
    title: 'What is bookmark?',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    title: 'How can I request new browser?',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    title: 'Is there a mobile App?',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    title: 'What about Chromium browsers?',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const FAQ = () => {
    return (
        <section className="faq">
            <div>
            <div className="faq__text-box">
                <h2 className="heading-2 faq__header">Frequently Asked Questions</h2>
                <p className="faq__text">
                   Here are some of our FAQs. If You have any other questions you'd
                   like to answered please feel free to email us           
                </p>
            </div>
            </div>
            <Accordion allowZeroExpanded>
                {items.map((item) => (
                <AccordionItem key={item.title}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                    <AccordionItemPanel>
                    {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
    ))}
            </Accordion>
            <button className="btn faq__button">
                    More info
            </button>
        </section>
    )
}

export default FAQ
