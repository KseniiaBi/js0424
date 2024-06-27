'use client';

import { useState } from "react";

export default function Accordeon(){
    const [isActive, setIsActive] = useState(0);
    return(
    <div className="accordeon">
        <AccordeonPanel title="Delivery" 
        isActive={isActive === 0}
        onShow={()=>setIsActive(0)}>
            <p>Delivery Policy</p>
        </AccordeonPanel>
        <AccordeonPanel title="Payment"
            isActive={isActive === 1}
            onShow={()=>setIsActive(1)}>
            <p>Payment Info</p>
        </AccordeonPanel>
        <AccordeonPanel title="Contacts"
            isActive={isActive === 2}
            onShow={()=>setIsActive(2)}>
            <p>Contact Info</p>
        </AccordeonPanel> 
    </div>
    )
}

const AccordeonPanel = ({title, children, onShow, isActive}) => {
    
    return(
        <div className="accordeon_item">
            <h4 className="accordeon_item_title" onClick={onShow}>
                {title}
                </h4>
            <div className={`accordeon_item_content ${isActive ? 'active' : ''}`}>{children}</div>
        </div>
    )
}