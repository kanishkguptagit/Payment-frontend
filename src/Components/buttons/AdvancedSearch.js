import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from '@mui/material/styles';
import './AddButton.css';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from "@mui/material/Grid";
import * as React from "react";
const AdvancedSearch = () =>{
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Button className="add_button"  variant="outlined" onClick={handleClickOpen} style={{ height: 30,width: 200,color: "white"}}>
        Advanced Search
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} style={{'width':'1000rs'}}>
        <DialogTitle style={{'backgroundColor': '#283a46',color:"white"}}>Advanced Search</DialogTitle>
        <DialogContent style={{'backgroundColor': '#283a46'}} >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>  
              <Grid item xs={6}>
                <TextField className="inputRounded" 
                  margin="dense"
                  id="invoice_currency"
                  label="Document Id "
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} >
                <TextField className="inputRounded" 
                  margin="dense"
                  id="cust_payment_terms"
                  label="Invoice Id"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField className="inputRounded" 
                  margin="dense"
                  id="invoice_currency"
                  label="Customer Number"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField className="inputRounded" 
                  margin="dense"
                  id="invoice_currency"
                  label="Buisness year"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions style={{'backgroundColor': '#283a46'}}>
        <Button onClick={handleClose}   variant="outlined"  style={{borderColor:"white", color: "white",marginLeft: '5px', height: 30,width: 450 }}>Search</Button>
          <Button onClick={handleClose}  variant="outlined"  style={{borderColor:"white",color: "white",marginRight:'5px', height: 30,width: 450 }}>Cancel</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
export default AdvancedSearch