import React, { useState } from "react";
import Operations from "./Operations";
import MainGrid from "./MainGrid";
const Body = () => {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);

    return (
        <>
            <Operations
                rows={selectedRow}
                setSelectedRow={setSelectedRow}
                data={data}
                setData={setData}
            />
            <MainGrid
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
                data={data}
                setData={setData}
            />
        </>
    );
};

export default Body;
