import React,{ useState, useEffect } from 'react';
import { ReactComponent as IllustrationFeature2 } from '../../images/illustration-features-tab-2.svg'  
import useMousePosition from '../hooks/useMousePosition'
import { ReactComponent as Close } from '../../images/icon-close.svg'  
import CustomTab from './CustomTab'  
import '../../styles/modal.scss'
import Modal from 'react-modal'
 



const CustomModal = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const {x, y} = useMousePosition()
  
 
    

  function closeModal(){
    setIsOpen(false);
  }

      useEffect(() => {
        if(y <= 5){
          setIsOpen(true)
        }
      },[y])

      useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        },3000)
      },[])
    
    return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          contentLabel="Features"
        >
              <Close onClick={closeModal} className="modal__close-button"/>
              <CustomTab 
                    children={<IllustrationFeature2 />}
                    header="Intelligent search"
                    text="Our powerful search will help You find saved sites in no time at all.
                    No need to trawl through all of Your bookmarks.
                    "
                />
         
        </Modal>
    );  
}

export default CustomModal
