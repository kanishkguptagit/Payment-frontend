import React from "react";
import { AppBar } from "@mui/material";

import Highradius from "./Highradius";

const Title = () => {
    return(
        <AppBar position="relative" elevation="0">
            <Highradius />
            <div style={{backgroundColor:"#2d4250", paddingLeft:"10px", paddingBottom:"5px"}}>Invoice List</div>
        </AppBar>
    )
}

export default Title;