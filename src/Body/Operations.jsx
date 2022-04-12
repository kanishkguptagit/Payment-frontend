import React from "react";
import PredictButton from '../Components/buttons/PredictButton';
import TextField from "@mui/material/TextField";
import classes from "./Operations.module.css";
import AddButton from "../Components/buttons/AddButton";
import AnalyticsButton from "../Components/buttons/AnalyticsButton";
import AdvancedSearch from "../Components/buttons/AdvancedSearch";
import EditButton from "../Components/buttons/EditButton";
import DeleteButton from "../Components/buttons/DeleteButton";
import ButtonGroup from "@mui/material/ButtonGroup";

const Operations = (props) => {
    return (
        <>
            <div className={classes.contain}>
            <ButtonGroup
                size="small"
                variant="outlined"
                aria-label="outlined button group"
            >
                    <PredictButton/>
                    <AnalyticsButton/>
                    <AdvancedSearch/>
            </ButtonGroup>
                <TextField
                    style={{ marginLeft: "70px", marginRight: "50px" }}
                    className={classes.tfield}
                    size="small"
                    id="outlined-search"
                    placeholder="Search Customer id"
                    type="search"
                />
                <ButtonGroup
                    size="small"
                    variant="outlined"
                    aria-label="outlined button group"
                >
                    <AddButton/>
                    <EditButton rows={props.rows}/>
                    <DeleteButton rows={props.rows}/>
                </ButtonGroup>
            </div>
        </>
    );
};

export default Operations;
