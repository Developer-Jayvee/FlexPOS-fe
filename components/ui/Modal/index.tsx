import SideModal from "./SideModal";

type ModalTypes = {
    header ?:React.ReactNode;
    children?:React.ReactNode;
    footer?:React.ReactNode;
    isVisible: boolean;
}
export default function ModalComponent(
    {
       header , children , footer , isVisible
    } : ModalTypes
){
    return (
        <SideModal header={header} children={children} footer= {footer} isVisible={isVisible}/>
    )
}