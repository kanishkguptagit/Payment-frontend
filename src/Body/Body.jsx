import React, { useState } from "react";
import Operations from "./Operations";
import MainGrid from "./MainGrid";
import Footer from "../Components/Footer";
const Body = () => {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const [reload, setReload] = useState(0);

    const reloadHandler = () => {
        setReload(prev => 1-prev);
    }

    return (
        <>
            <Operations
                rows={selectedRow}
                setSelectedRow={setSelectedRow}
                data={data}
                setData={setData}
                reload={reload}
                setReload={reloadHandler}
            />
            <MainGrid
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
                data={data}
                setData={setData}
                reload={reload}
                setReload={setReload}
            />
            <Footer />
        </>
    );
};

export default Body;
