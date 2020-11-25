import React from 'react';
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

export default function Header() {
    return (
        <div className='header'>
            <h1><Icon icon={locationIcon} /> Wildfire tracker (Powered by NASA)</h1>            
        </div>
    )
}
