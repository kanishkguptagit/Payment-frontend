import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import classes from "./GroupButton.module.css";

const GroupButton = (props) => {
    return (
        <ButtonGroup
            size="small"
            variant="outlined"
            aria-label="outlined button group"
        >
            <Button
                className={classes.butt}
                variant={props.var1 ?? "outlined"}
                style={{ color: "white", fontSize: "12px" }}
            >
                PREDICT
            </Button>
            <Button
                className={classes.butt}
                variant={props.var2 ?? "outlined"}
                style={{ color: "white", fontSize: "12px" }}
            >
                ANALYTICS VIEW
            </Button>
            <Button
                className={classes.butt}
                variant={props.var3 ?? "outlined"}
                style={{ color: "white", fontSize: "12px" }}
            >
                ADVANCED SEARCH
            </Button>
        </ButtonGroup>
    );
};

export default GroupButton;
