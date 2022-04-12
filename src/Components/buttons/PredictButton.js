import './AddButton.css';
import Button from "@mui/material/Button";

const PredictButton = () =>{
    const handleClickOpen = () =>{
        
    }
    return (
        <>
            <Button className="add_button"  variant="contained" onClick={handleClickOpen} style={{ height: 30,width: 150,color: "white"}}>
                Predict
            </Button>
        </>
    )
}
export default PredictButton