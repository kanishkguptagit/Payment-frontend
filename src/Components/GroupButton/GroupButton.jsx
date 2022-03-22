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
                style={{ color: "white", fontSize: "12px", borderRight:"1px solid #3f50b5" }}
            >
                {props.text1}
            </Button>
            <Button
                className={classes.butt}
                variant={props.var2 ?? "outlined"}
                style={{ color: "white", fontSize: "12px" }}
            >
                {props.text2}
            </Button>
            <Button
                className={classes.butt}
                variant={props.var3 ?? "outlined"}
                style={{ color: "white", fontSize: "12px" }}
            >
                {props.text3}
            </Button>
        </ButtonGroup>
    );
};

export default GroupButton;
