import { NavLink, useLocation } from "react-router";
import "./nav.css"
import { ViewGrid , Drawer , Wrench} from 'iconoir-react';
type CustomClassType = {
    customClass?: string;
}
export default function LeftNav({ customClass } : CustomClassType){
    const mainPrefix = "admin/"
    return(
        <nav className={`left-nav  ${customClass}`}>
            <div className="py-4">
                <p className="text-[24px] text-center">FlexPOS</p>
            </div>
            <ul className="p-2 nav-list">
                <li>
                    <NavLink to={`${mainPrefix}dashboard`}>
                        <span><ViewGrid/></span>
                        <span>Dashboard</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${mainPrefix}inventory`}>
                        <span><Drawer/></span>
                        <span>Inventory</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${mainPrefix}configuration`}>
                        <span><Wrench/></span>
                        <span>Configurations</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}