import { Search , Plus } from "iconoir-react"
import "./inventory.css"
import CardComponent from "components/feature/card"
import TestProduct from "../../../../public/images/sample-product.png";
import { FastArrowRight } from "iconoir-react";
import SideModal from "components/ui/Modal/SideModal";
import { useState } from "react";
export default function InventoryPage() {

    const [isModalOpen , setModalOpen] = useState(false);

    const openModal = () => setModalOpen(!isModalOpen);
    return (
        <div className="grid grid-cols-1 grid-rows-[50px_1fr] ">
            <div className="filters grid grid-cols-2 ">
                <div className="search-filter flex items-center gap-2">
                    <Search />
                    <input type="text" placeholder="Search product here..." className="border-b input-search" />
                </div>
                <div className="right-filters grid grid-cols-[1fr_90px] gap-4">
                    <select>
                        <option value="">Choose a category</option>
                    </select>
                    <button>
                        <Plus/>
                        <span> New </span>
                    </button>

                </div>
            </div>
            <div className="container-fluid  p-2  ">
                <div className="card-list grid grid-cols-[repeat(auto-fit,minmax(auto,260px))]">
                    <CardComponent onClickHandler={openModal} />
                </div>

            </div>
            <SideModal
                isVisible={isModalOpen}
                header={
                    <div className="image-container ">
                        <img src={TestProduct} />
                    </div>
                }
                children={
                    (
                        <>
                            <div className="input-field">
                                <label>Name</label>
                                <input type="text" placeholder="Product Name" />
                            </div>
                            <div className="input-field">
                                <label>Description</label>
                                <textarea placeholder="Product Description" rows={10}></textarea>
                            </div>
                            <div className="input-field">
                                <label>Price</label>
                                <input type="text" placeholder="Product Price" />
                            </div>
                        </>
                    )
                }
                footer={
                    <button className="btn-primary">Submit</button>
                }
            />
        </div>
    )
}