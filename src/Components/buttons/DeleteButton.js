import React,{useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const DeleteButton = (props) => {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        let params = "";

        for (let i = 0; i < props.rows.length; i++) {
            params = params + "sl_no=" + props.rows[i] + "&";
        }

        params.slice(0, -1);

        console.log("params = "+params);

        axios
            .get("Payment/deletedata?" + params)
            .then((res) => {
                console.log(JSON.stringify(res.data));
                const newData = props.data.filter(item => !props.rows.includes(item.sl_no));
                props.setData(newData);
                
            })
            .catch((e) => {
                console.log(e);
            });


        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{
                    height: 30,
                    width: 150,
                    color: "white",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                }}
                disabled={props.rows.length === 0}
            >
                Delete
            </Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    style={{ backgroundColor: "#283a46", color: "white" }}
                >
                    {"Delete Records ?"}
                </DialogTitle>
                <DialogContent style={{ backgroundColor: "#283a46" }}>
                    <DialogContentText
                        id="=alert-dialog-slide-description"
                        style={{ color: "white" }}
                    >
                        Are you sure you want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#283a46" }}>
                    <Button
                        onClick={handleDelete}
                        variant="outlined"
                        style={{
                            borderColor: "white",
                            marginLeft: "5px",
                            height: 30,
                            width: 450,
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        style={{
                            borderColor: "white",
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
export default DeleteButton;
