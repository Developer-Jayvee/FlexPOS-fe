import "./card.css"
import TestProduct from "../../../public/images/sample-product.png";
import React, { useRef } from "react";

type CardComponentTypes = {
    onClickHandler?: () => void;
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
export default function CardComponent(
    { 
        onClickHandler, header , children , footer
     } : CardComponentTypes
){
    const cardRef = useRef(null);
    
    return(
        <div ref={cardRef} onClick={onClickHandler} className="card-container grid grid-rows-[120px_80px_auto]">
            <div className="card-header">
                {header ?? ""}
                
            </div>
            <div className="card-body grid grid-cols-2 items-center">
                { children ?? "" }
               
            </div>
            <div className="card-footer">
                { footer ?? ""}
            </div>
        </div>
    )
}