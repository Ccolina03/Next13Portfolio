import React, {FC} from 'react';

export interface SideBarIconProps {
    icon: React.ReactNode, 
    className?:string
}


//SideBarIcon will become reusable. Card must be reusable too.
const SideBarIcon: FC<SideBarIconProps> = ({
        icon, 
        className = ""
}) => {
    return (
    <div className={`sidebar-icon xl:mr-2 xl:mt-0 sticky ${className}`}>
        {icon}
    </div>
    )
}

export default SideBarIcon;