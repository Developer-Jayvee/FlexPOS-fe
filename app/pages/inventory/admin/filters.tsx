import { Search , Plus } from "iconoir-react"
import type { FiltersTypes } from "types/global"
export default function Filters(
    {
        setModalOpen 
    } : FiltersTypes
) {
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    return (
        <div className="filters grid grid-cols-[1fr_auto] ">
            <div className="search-filter flex items-center gap-2">
                <Search />
                <input type="text" placeholder="Search product here..." className="border-b input-search" />
            </div>
            <div className="right-filters grid grid-cols-[200px_100px] gap-4">
                <select>
                    <option value="">Choose a category</option>
                </select>
                <button className="btn-success" onClick={handleOpenModal}>
                    <Plus />
                    <span> New </span>
                </button>

            </div>
        </div>
    )
}