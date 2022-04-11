import React from "react";

import GroupButton from "../Components/GroupButton/GroupButton";
import TextField from "@mui/material/TextField";
import classes from "./Operations.module.css";

const Operations = () => {
    return (
        <>
            <div className={classes.contain}>
                <GroupButton
                    var1="contained"
                    text1="PREDICT"
                    text2="ANALYTICS VIEW"
                    text3="ADVANCED SEARCH"
                />
                <TextField
                    style={{ marginLeft: "70px", marginRight: "50px" }}
                    className={classes.tfield}
                    size="small"
                    id="outlined-search"
                    placeholder="Search Customer id"
                    type="search"
                />
                <GroupButton var2="disabled" var3="disabled"
                    text1="ADD"
                    text2="EDIT"
                    text3="DELETE"
                />
            </div>
        </>
    );
};

export default Operations;
