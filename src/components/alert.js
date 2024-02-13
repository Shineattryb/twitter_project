import {useState} from 'react';
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from '@attrybtech/attryb-ui'
import React from 'react';
import Input from './input';

// import React, { useEffect, useState } from "react"


// import { FiCircle, FiCopy } from "react-icons/fi"

const  Alert=({addtweet})=> {
  const { modalState, modalRef, exitModal, showModal } = useModal();
  const [showAlert,setShowAlert]=useState(false)
  const [themeofAlert,setAlertTheme]=useState("info")
  const [tweetcontent,settweetcontent]=useState('');
        const modalOkayHandler = () => {
            if(!tweetcontent.trim()){
            //   setShowAlert(true);
            //   setAlertTheme("info");
            alert("enter tweet");
                return;
            }
            console.log("Accepted");
            addtweet(tweetcontent);
            settweetcontent('');
            exitModal();
        };
        const modalCancelHandler = () => {
            console.log("Cancelled");
            exitModal();
        };
    
       
      


  return (
    <div>
          <div className="Doc DocAlertPopup">
           <div className="DocEntry">
                {/* <h3>Standard Alert Popup</h3> */}
                <div className="Example5" style={{ gridGap: "2rem",  }}>
                    <Button onClick={showModal}>Tweet</Button>
                    <AlertPopup
                        wrapperRef={modalRef}
                        name="example-popup-1"
                        visibility={modalState}
                        onBackdropClick={modalCancelHandler}>
                        <AlertPopupHeader>Enter Tweet here</AlertPopupHeader>
                        <AlertPopupBody><Input settweetcontent={settweetcontent}/></AlertPopupBody>
                        <AlertPopupFooter>
                            <Button onClick={modalCancelHandler} variant="link">
                                Cancel
                            </Button>
                            <Button onClick={modalOkayHandler}>Okay</Button>
                        </AlertPopupFooter>
                    </AlertPopup>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Alert;
