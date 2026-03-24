import { Bell } from 'iconoir-react';
type CustomClassType = {
    customClass?: string;
}
export default function TopNav({ customClass } : CustomClassType){

    return(
        <nav className={`top-nav ${customClass} flex items-center justify-end  w-auto`}>
            <div className="float-right flex gap-2 items-center mr-4">
                <Bell/>
                <div className='icon-container rounded-full border-2 w-10 h-10'></div>
            </div>
        </nav>
    )
}