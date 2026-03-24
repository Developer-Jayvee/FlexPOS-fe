import "./inventory.css"
import CardComponent from "components/feature/card"
import TestProduct from "../../../../public/images/sample-product.png";
import SideModal from "components/ui/Modal/SideModal";
import { useState, useEffect } from "react";
import Filters from "./filters";
import { inventoryApi } from "services/modules/inventoryApi";
import type { InvetoryDetailTypes } from "types/inventory";

const InventoryPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentItemID, setCurrentItemID] = useState<undefined | null | number>(null);
    const [invetoryList, setInventoryList] = useState<InvetoryDetailTypes[]>([]);
    const [formData, setFormData] = useState<InvetoryDetailTypes>({
        name: "",
        stocks: 0,
        price: 0
    })
    const openModal =  async (id: number | undefined) => {
        resetVariables();

        setTimeout( async () => {
            if(id){
                setModalOpen(true);
                const response = await getItemDetails(id);
                setFormData({
                    name:response.name,
                    stocks:response.stocks,
                    price:response.price
                });
                setCurrentItemID(response?.id);
            }
        } , 1000);
    };
    const getItemDetails = async (id: number) => {
        const response = await inventoryApi.getItemDetails(id);
        return response.data;
    }
    const getAllItems = async () => {
        const response = await inventoryApi.getInventory();
        if (response) {
            setInventoryList(response.data.data);
        }
    }
    const handleFormData = (value: string | number, key: keyof InvetoryDetailTypes) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value
        })
        )
    }
    const handleSubmit = async () => {
        const action = confirm("Click ok to continue");
        if(!action){
            return false;
        }
        const response = await inventoryApi.createNewItem({ formData: formData });
        if (!response) {
            return alert('Failed to add inventory');
        }
        await getAllItems();
        alert(response.data);
        resetVariables();
    }
    const handleDelete = async () => {
        const action = confirm("Are you sure you want to delete this item?");
        if(!action){
            return false;
        }
        if(currentItemID){
            const response = await inventoryApi.deleteExistingItem(currentItemID);
            if(response){
                alert('Successfully deleted');
                await getAllItems();
                resetVariables()
            }
        }
    }
    const setCurrency = (amount : number) => {
        const formatter = new Intl.NumberFormat('en-PH',{
            style:"currency",
            currency:"PHP",
            minimumFractionDigits:2,
            maximumFractionDigits:2
        });
        return formatter.format(amount);
    }
    const resetVariables = () => {
        setFormData({
            name:"",
            stocks:0,
            price:0
        })
        setCurrentItemID(null);
        setModalOpen(false);
    }
    useEffect(() => {
        getAllItems()
    }, [])
    useEffect( () => {
        if(!isModalOpen){
            setCurrentItemID(null);
        }
    },[isModalOpen])
    return (
        <div className="grid grid-cols-1 grid-rows-[50px_1fr] ">
            <Filters setModalOpen={ setModalOpen} />
            <div className="container-fluid  p-2  ">
                <div className="card-list grid grid-cols-[repeat(auto-fit,minmax(auto,260px))]">
                    {
                       invetoryList.map( (data) => (
                            <CardComponent
                                key={data?.id}
                                onClickHandler={() => openModal(data?.id)}
                                header={
                                    (
                                        <div className="image-container">
                                            <img src={TestProduct} />
                                        </div>
                                    )
                                }
                            >
                                <p>{data?.name}</p>
                                <p className="text-right font-light">Stocks: {data?.stocks}</p>
                                <p className="col-span-full text-xl font-bold">{setCurrency(data?.price)}</p>
                            </CardComponent>
                       ))
                    }
                </div>
            </div>
            <SideModal
                isVisible={isModalOpen}
                setModalOpen={setModalOpen}
                header={modalDetails.headers()}
                footer={modalDetails.footer(handleSubmit, handleDelete)}
            >
                {modalDetails.content(handleFormData , formData)}
            </SideModal>
        </div>
    )
}
const modalDetails = {
    headers: () => (
        <div className="image-container ">
            <img src={TestProduct} />
        </div>
    ),
    content: (
        handleFormData: (value: string | number, key: keyof InvetoryDetailTypes) => void,
        formData: InvetoryDetailTypes
    ) => (
        <>
            <div className="input-field">
                <label>Name</label>
                <input type="text" onChange={(e) => handleFormData(e.target.value, 'name')} value={formData.name} placeholder="Product Name" />
            </div>
            <div className="input-field">
                <label>Description</label>
                <textarea placeholder="Product Description" rows={10}></textarea>
            </div>
            <div className="input-group-field ">
                <div className="input-field">
                    <label>Price</label>
                    <input type="text" placeholder="Product Price" onChange={(e) => handleFormData(e.target.value, 'price')}  value={formData.price}  />
                </div>
                <div className="input-field">
                    <label>Stocks</label>
                    <input type="text" placeholder="Product Stocks" onChange={(e) => handleFormData(e.target.value, 'stocks')}  value={formData.stocks}  />
                </div>
            </div>

        </>
    ),
    footer: (
        handleSubmit: () => void,
        handleDelete: () => void
    ) => (
        <div className="flex flex-col gap-2">
            <button className="btn-primary" onClick={handleSubmit}>Submit</button>
            <button className="btn-error" onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default InventoryPage;