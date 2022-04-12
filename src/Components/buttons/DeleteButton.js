import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { TransitionProps } from "@mui/material/transitions";

const DeleteButton = (props) => {
    const [open, setOpen] = React.useState(false);
    const [loading, setIsLoading] = React.useState(0);

    const delData = async (data) => {
        var data = JSON.stringify({
            sl_no: data,
        });

        var config = {
            method: "post",
            url: "http://localhost:8080/hrc_crud_pojo/delData",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleDelete = () => {
        setIsLoading(1);
        // props.data.map(data=>{
        //   delData(data)
        // });
        setIsLoading(0);
        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        console.log(props.data);
    }, [open]);

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{ height: 30, width: 150, color: "white", borderTopLeftRadius:"0", borderBottomLeftRadius:"0" }}
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
