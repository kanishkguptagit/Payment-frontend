import React from "react";
import { Toolbar } from "@mui/material";

import hrc from "../hrc.svg";

import classes from './Highradius.module.css'

const Highradius = () => {
    return (
        <div className={classes.pos}>
            <Toolbar>
                <img className={classes.imgclass} src={hrc} alt="hrclogo"/>
            </Toolbar>
        </div>
    )
}

export default Highradius;