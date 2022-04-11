import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Typography from '@mui/material/Typography';
import classes from "./GroupButton.module.css";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const GroupButton = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                onClick = {handleOpen}
            >                
                {props.text1}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500,}}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
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
