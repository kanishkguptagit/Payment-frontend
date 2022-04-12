import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import "./AddButton.css";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import * as React from "react";
import axios from 'axios';

const EditButton = (props) => {
    const [open, setOpen] = useState(false);
    const [curr,setCurr] = useState();
    const [cpt, setCpt] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditClick = (e) => {
        e.preventDefault();

        const sl_no = props.rows[0];

        const url = "sl_no="+sl_no+"&invcurr="+curr+"&cpterms="+cpt;

        const config = {
            method: "GET",
            url: "Payment/updatedata?"+url,
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        handleClose();
    }

    useEffect(()=>{
        const sl = props.rows[0];
        const prefill = props.data.filter(item => item.sl_no == sl);
        setCurr(prefill[0].invoice_currency);
        setCpt(prefill[0].customer_payment_terms);
    },[open])

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Button
                disabled={props.rows.length !=1}
                className="add_button"
                variant="outlined"
                onClick={handleClickOpen}
                style={{ height: 30, width: 150, color: "white", borderRadius:"0" }}
            >
                Edit
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                style={{ width: "1000rs" }}
            >
                <DialogTitle
                    style={{ backgroundColor: "#283a46", color: "white" }}
                >
                    Edit
                </DialogTitle>
                <DialogContent style={{ backgroundColor: "#283a46" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={10}>
                            <Grid item xs={6}>
                                <TextField
                                    className="inputRounded"
                                    margin="dense"
                                    id="invoice_currency"
                                    label="Invoice Currency"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    onChange={e=>setCurr(e.target.value)}
                                    value={curr}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    className="inputRounded"
                                    margin="dense"
                                    id="cust_payment_terms"
                                    label="Customer Payment Terms"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    onChange={e=>setCpt(e.target.value)}
                                    value={cpt}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#283a46" }}>
                    <Button
                        onClick={handleEditClick}
                        variant="outlined"
                        style={{
                            borderColor: "white",
                            color: "white",
                            marginLeft: "5px",
                            height: 30,
                            width: 450,
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        style={{
                            borderColor: "white",
                            color: "white",
                            marginRight: "5px",
                            height: 30,
                            width: 450,
                        }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EditButton;
