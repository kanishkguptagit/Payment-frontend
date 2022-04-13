import React, { useState } from "react";
import PredictButton from "../Components/buttons/PredictButton";
import TextField from "@mui/material/TextField";
import classes from "./Operations.module.css";
import AddButton from "../Components/buttons/AddButton";
import AnalyticsButton from "../Components/buttons/AnalyticsButton";
import AdvancedSearch from "../Components/buttons/AdvancedSearch";
import EditButton from "../Components/buttons/EditButton";
import DeleteButton from "../Components/buttons/DeleteButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from 'axios';

const Operations = (props) => {

    const searchHandler = (e) => {
        const search = e.target.value;
        const params = "offset=0&limit=10&search=" + search;

        axios
            .get("Payment/fetchdata?"+params)
            .then((res) => {
                props.setData(res.data.Payments);
            })
            .catch((e) => console.log(e));
    };

    return (
        <>
            <div className={classes.contain}>
                <ButtonGroup
                    size="small"
                    variant="outlined"
                    aria-label="outlined button group"
                >
                    <PredictButton />
                    <AnalyticsButton />
                    <AdvancedSearch setData={props.setData} />
                </ButtonGroup>
                <TextField
                    style={{ marginLeft: "70px", marginRight: "50px" }}
                    className={classes.tfield}
                    size="small"
                    id="outlined-search"
                    placeholder="Search Customer id"
                    type="search"
                    onChange={searchHandler}
                />
                <ButtonGroup
                    size="small"
                    variant="outlined"
                    aria-label="outlined button group"
                >
                    <AddButton data={props.data} setData={props.setData} />
                    <EditButton
                        rows={props.rows}
                        data={props.data}
                        setData={props.setData}
                    />
                    <DeleteButton
                        rows={props.rows}
                        data={props.data}
                        setData={props.setData}
                        setSelectedRow={props.setSelectedRow}
                    />
                </ButtonGroup>
            </div>
        </>
    );
};

export default Operations;
