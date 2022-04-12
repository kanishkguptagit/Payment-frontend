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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const AnalyticsButton = () =>{
const [open, setOpen] = useState(false);
const [clear_date1 , setClear_date1] = useState('');
const [due_in_date1 , setDue_in_date1] = useState('');
const [baseline_create_date1 , setBaseline_create_date1] = useState('');
const [clear_date2 , setClear_date2] = useState('');
const [due_in_date2 , setDue_in_date2] = useState('');
const [baseline_create_date2 , setBaseline_create_date2] = useState('');

function convertDate(date) {
  var newDate = new Date(date);
  var dd = String(newDate.getDate()).padStart(2, '0');
  var mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = newDate.getFullYear();
  newDate = yyyy + '-' + mm + '-' + dd;
  return newDate;
}
const handleSubmit = (e) => {
  e.preventDefault();
var clear_dt1 = convertDate(clear_date1);
var due_dt1 = convertDate(due_in_date1);
var baseline_dt1 = convertDate(baseline_create_date1);
var clear_dt2 = convertDate(clear_date2);
var due_dt2 = convertDate(due_in_date2);
var baseline_dt2 = convertDate(baseline_create_date2);
  
var data = JSON.stringify({
"clear_date": clear_dt1,
"due_in_date": due_dt1,
"baseline_create_date": baseline_dt1,
});

// var config = {
// method: 'POST',
// url: 'http://localhost:8080/hrc_crud_pojo/addData',
// headers: { 
//   'Content-Type': 'application/json'
// },
// data : data
// };

// axios(config)
// .then(function (response) {
// console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
// console.log(error);
// });

};

const [value, setValue] = React.useState(new Date());
const handleChange = (newValue) => {
  setValue(newValue);
};

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
        Analytics View
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} style={{'width':'1000rs'}}>
        <DialogTitle style={{'backgroundColor': '#283a46',color:"white",'paddingLeft':'48px','paddingBottom':'60px'}}>Analytics View</DialogTitle>
        <DialogContent style={{'backgroundColor': '#283a46', 'paddingLeft':'48px'}} >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>  
              <Grid item xs={6}>
              <font color="white">Clear Date</font>
              <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="dd-mm-yyyy"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={clear_date1}
                    onChange={(e) => setClear_date1(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="dd-mm-yyyy"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={clear_date2}
                    onChange={(e) => setClear_date2(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </div>
              </Grid>
              <Grid item xs={6} >
              <font color="white">Due Date</font>
              <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="dd-mm-yyyy"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={due_in_date1}
                    onChange={(e) => setDue_in_date1(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="dd-mm-yyyy"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={due_in_date2}
                    onChange={(e) => setDue_in_date2(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </div>
              </Grid>
              <Grid item xs={6}>
              <font color="white">Baseline Create Date</font>
              <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="dd-mm-yyyy"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={baseline_create_date1}
                    onChange={(e) => setBaseline_create_date1(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="dd-mm-yyyy"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={baseline_create_date2}
                    onChange={(e) => setBaseline_create_date2(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </div>
              </Grid>
              <Grid item xs={5.2}>
                  <font color="white">Invoice Currency</font>
                <TextField className="inputRounded" 
                  margin="dense"
                  id="invoice_currency"
                  label="Invoice Currency"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions style={{'backgroundColor': '#283a46'}}>
        <Button onClick={handleClose}   variant="outlined"  style={{borderColor:"white", color: "white",marginLeft: '5px', height: 30,width: 450 }}>Submit</Button>
          <Button onClick={handleClose}  variant="outlined"  style={{borderColor:"white",color: "white",marginRight:'5px', height: 30,width: 450 }}>Cancel</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
export default AnalyticsButton