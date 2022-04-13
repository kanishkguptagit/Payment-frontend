import React from "react";
import { Toolbar } from "@mui/material";

import hrc from "../hrc.svg";
import abc from "../abc.png";

import classes from './Highradius.module.css'

const Highradius = () => {
    return (
        <div>
            <Toolbar style={{backgroundColor:"#2d4250"}}>
                <div className={classes.pos1} style={{ width:"100%"}}>
                <img className={classes.imgclass}  src={abc} alt="hrclogo"/>
                </div>
                <div className={classes.pos} style={{ width:"100%"}}>
                <img className={classes.imgclass}  src={hrc} alt="hrclogo"/>
                </div>
            </Toolbar>
        </div>
    )
}

export default Highradius;