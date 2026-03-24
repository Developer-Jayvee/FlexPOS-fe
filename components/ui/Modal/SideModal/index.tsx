import { useEffect, useState } from "react";
import "../modal.css"
import { FastArrowRight } from "iconoir-react"

type ModalTypes = {
    header ?:React.ReactNode;
    children?:React.ReactNode;
    footer?:React.ReactNode;
    isVisible:boolean;
}
export default function SideModal(
     {
        header , children , footer , isVisible
    } : ModalTypes
){
    const [isModalVisible , setModalVisible] = useState<boolean>(false);
    useEffect( () => setModalVisible(isVisible),[isVisible]);
    
    return(
        <div className={`side-modal fixed ${isModalVisible ? 'visible' : ''}`}>
                <FastArrowRight className="close_btn" onClick={() => setModalVisible(false)}/>
                <div className="modal-header">
                   { header ?? ""}
                </div>
                <div className="modal-body">
                    { children ?? ""}
                </div>
                <div className="modal-footer">
                   { footer ?? ""}
                </div>

            </div>
    )
}

