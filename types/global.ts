export type FiltersTypes = {
    setModalOpen: (isOpen : boolean) => void;
}

export type ModalTypes = {
    header ?: React.ReactNode;
    footer?:  React.ReactNode;
    setModalOpen:(isModalVisible : boolean) => void;
    children?: React.ReactNode;
    isVisible:boolean;
}