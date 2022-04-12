import React,{useState} from "react";
import Operations from "./Operations";
import MainGrid from "./MainGrid";
const Body = () => {

    const [selectedRow,setSelectedRow] = useState([]);

    return (
        <>
            <Operations rows={selectedRow} />
            <MainGrid selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
        </>
    );
};

export default Body;
