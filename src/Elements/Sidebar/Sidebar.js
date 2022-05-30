import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
} from "react-pro-sidebar";


//import icons from react icons
import { SiAboutdotme } from "react-icons/si";
import { SiRobotframework } from "react-icons/si";
import { CgTimelapse } from "react-icons/cg";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


//Import react-router
import { Link } from 'react-router-dom'



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.scss";


const Sidebare = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <Link to="/home"><p>{menuCollapse ? "B" : "BLIN"}</p></Link>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                <Link to="/">Home</Link>
                            </MenuItem>
                            <MenuItem icon={<SiAboutdotme />}><Link to="/about">  About</Link></MenuItem>
                            <MenuItem icon={<SiRobotframework />}><Link to="/work">  Work</Link></MenuItem>
                            <MenuItem icon={<CgTimelapse />}><Link to="/what-next">  What Next?</Link></MenuItem>
                            <MenuItem icon={<CgSpinnerTwoAlt />}><Link to="/contact">  Drop a Line.</Link></MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebare;