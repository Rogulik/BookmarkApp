import React from 'react'
import '../styles/carousel.scss'
import { ReactComponent as IllustrationFeature1 } from '../images/illustration-features-tab-1.svg'
import { ReactComponent as IllustrationFeature2 } from '../images/illustration-features-tab-2.svg'
import { ReactComponent as IllustrationFeature3 } from '../images/illustration-features-tab-3.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CustomTab from './UI/CustomTab'


const Carousel = () => {
   

    return (
        <Tabs className="carousel">
            <TabList className="carousel__menu">   
                <ul className="carousel__list">
                    <Tab className="carousel__item" >Simple Bookmarking</Tab>
                    <Tab className="carousel__item" >Speedy Searching</Tab>
                    <Tab className="carousel__item" >Easy Sharing</Tab>
                </ul>
            </TabList>
                <TabPanel>
                    <CustomTab 
                    children={<IllustrationFeature1 />}
                    header="Bookmark in one click"
                    text="Organize your bookmarks however you like. Our simple drag-and-drop
                    interface gives you complete control over how you manage your favourite sites."
                    />
                </TabPanel>
                <TabPanel>
                    <CustomTab 
                    children={<IllustrationFeature2 />}
                    header="Intelligent search"
                    text="Our powerful search will help You find saved sites in no time at all.
                    No need to trawl through all of Your bookmarks.
                    "
                    />
                </TabPanel>
                <TabPanel>
                    <CustomTab 
                    children={<IllustrationFeature3 />}
                    header="Share your bookmarks"
                    text="Easily share your bookmarks and collections with others. Create a shareable link that you can send
                    at the click button"
                    />
                </TabPanel>
        </Tabs>
    )
}

export default Carousel
