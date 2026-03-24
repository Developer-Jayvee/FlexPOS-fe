import { useEffect, useState } from "react";
import "../modal.css"
import { FastArrowRight } from "iconoir-react"
import type { ModalTypes } from "types/global";

export default function SideModal(
     {
        header , children , footer , isVisible , setModalOpen
    } : ModalTypes
){
    return(
        <div className={`side-modal fixed ${isVisible ? 'visible' : ''}`}>
                <FastArrowRight className="close_btn" onClick={() => setModalOpen(false)}/>
                <div className="modal-header">
                   {header}
                </div>
                <div className="modal-body">
                    { children}
                </div>
                <div className="modal-footer">
                   { footer }
                </div>

            </div>
    )
}

