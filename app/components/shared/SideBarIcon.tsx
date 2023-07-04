import React, {FC} from 'react';

export interface SideBarIconProps {
    icon: React.ReactNode, 
    className?:string,
    contact?: boolean,
}

const getStyle = (contact: Pick<SideBarIconProps,'contact'>['contact']):string => {
    switch(contact) {
        case true:
            return 'contact-icon'
        case false:
        default:
            return 'sidebar-icon'
    }
}

//SideBarIcon will become reusable. Card must be reusable too.
const SideBarIcon: FC<SideBarIconProps> = ({
        contact,
        icon, 
        className = ""
}) => {
    const contactStyling = getStyle(contact);
    return (
    <div className={`${contactStyling} xl:mr-2 xl:mt-0 sticky ${className}`}>
        {icon}
    </div>
    )
}

export default SideBarIcon;