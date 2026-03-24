import "./card.css"
import TestProduct from "../../../public/images/sample-product.png";
import { useRef } from "react";

type CardComponentTypes = {
    onClickHandler?: () => void;
}
export default function CardComponent(
    { onClickHandler } : CardComponentTypes
){
    const cardRef = useRef(null);
    
    return(
        <div ref={cardRef} onClick={onClickHandler} className="card-container grid grid-rows-[120px_80px_auto]">
            <div className="card-header">
                <div className="image-container">
                    <img src={TestProduct} />
                </div>
            </div>
            <div className="card-body grid grid-cols-2 items-center">
                <p>Nike Bag</p>
                <p className="text-right font-light">Stocks: 1</p>
                <p className="col-span-full text-xl font-bold">Php 2,000.00</p>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}