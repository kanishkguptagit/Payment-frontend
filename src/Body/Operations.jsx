import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import classes from "./Operations.module.css";

const Operations = () => {
    return (
        <div className={classes.contain}>
            <ButtonGroup
                size="small"
                variant="outlined"
                aria-label="outlined button group"                
            >
                <Button
                    className={classes.butt}
                    color="primary"
                    variant="contained"
                    style={{ color: "white",fontSize:"12px" }}
                >
                    PREDICT
                </Button>
                <Button className={classes.butt} variant="outlined" style={{ color: "white", fontSize:"12px" }}>
                    ANALYTICS VIEW
                </Button>
                <Button className={classes.butt} variant="outlined" style={{ color: "white", fontSize:"12px" }}>
                    ADVANCED SEARCH
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Operations;
