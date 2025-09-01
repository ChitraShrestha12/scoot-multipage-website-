import React, { useState } from "react";
import chevronSvg from "../assets/Images/chevron.svg";


function FaqContent({faqContentQuestion,faqContentAnswer,myFaqRef,myFaqInView}) {
    const[isOpen,setIsOpen] = useState(false)
    console.log(myFaqRef,myFaqInView);
    
  return (
    <div ref={myFaqRef} className={`faqs-content ${myFaqInView?"fade-faqs-right":""}`} onClick={()=>{
        setIsOpen(!isOpen)
    }}>
      <div className="faq-content-question-section">
        <h1 className="faqs-content-question" style={{
          color:isOpen?"#0c63e4":""
        }}>{faqContentQuestion}</h1>
        <img src={chevronSvg} alt="chevronSvg" style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease"
        }}/>
      </div>
      <p className={`faqs-content-answer ${isOpen?"show":""}`}>{faqContentAnswer}</p>
    </div>
  );
}

export default FaqContent;
