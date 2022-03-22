import React from "react";

import GroupButton from "../Components/GroupButton/GroupButton";
import classes from './Operations.module.css';

const Operations = () => {
    return (
        <div className={classes.contain}>
            <GroupButton var1="contained" />
        </div>
    )
}

export default Operations;