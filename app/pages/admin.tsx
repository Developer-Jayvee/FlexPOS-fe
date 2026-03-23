import LeftNav from "components/ui/LeftNav";
import TopNav from "components/ui/TopNav";
import { Outlet } from "react-router";
import "../../styles/admin.css";


export default function AdminLayout(){

    return(
        <div className="container-fluid  h-screen grid grid-rows-[70px_1fr] grid-cols-[250px_1fr]">
            <TopNav customClass="col-start-2 p-2"/>
            <LeftNav customClass="col-start-1 row-start-1 row-span-2 p-2"/>
            <div className="container-fluid p-4">
                <Outlet/>
            </div>
        </div>
    )
}