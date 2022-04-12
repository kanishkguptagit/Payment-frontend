import { DataGrid } from '@mui/x-data-grid'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MainGrid.css'; 

const cols = [ 
  { field: "id", hide:true }, 
  { field: "sl_no", headerName:'sl_no', width:80 }, 
  { field: "business_code", headerName:'business_code', width:90 }, 
  { field: "customer_number", headerName:'customer_number', width:150 }, 
  { field: "clear_date", headerName:'clear_Date', width:120 }, 
  { field: "buisness_year", headerName:'buisness_year', width:120 }, 
  { field: "doc_id", headerName:'doc_id', width:120 }, 
  { field: "posting_date", headerName:'posting_date', width:150 }, 
  { field: "document_create_date", headerName:'document_create_date', width:180 }, 
  { field: "due_in_date", headerName:'due_in_date', width:120 }, 
  { field: "invoice_currency", headerName:'invoice_currency', width:150 }, 
  { field: "document_type", headerName:'document_type', width:120 }, 
  { field: "posting_id", headerName:'posting_id', width:100 }, 
  { field: "total_open_amount", headerName:'total_open_amount', width:180 }, 
  { field: "baseline_create_date", headerName:'baseline_create_date', width:180 }, 
  { field: "customer_payment_terms", headerName:'cust_payment_terms', width:180 }, 
  { field: "invoice_id", headerName:'invoice_id', width:120 }, 
];

const MainGrid=(props)=>{
  const fetchData = async () =>{
    const res = await axios.get('http://localhost:8080/Payment/fetchdata?offset=48578&limit=10');
    props.setData(res.data.Payments);
  }
  useEffect(()=>{
    fetchData();
    // console.log(data);
  },[])
  const[pageSize,setPageSize]=useState(5)
     return (
            <div className='grid'> 
                <DataGrid 
                    autoHeight 
                    getRowId={(row) => row.sl_no}
                    columns={cols} 
                    rows={props.data} 
                    // page={pageSize}
                    checkboxSelection 
                    pageSize={pageSize} 
                    onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)} 
                    pagination 
                    rowsPerPageOptions={[5,10,20]} 
                    sortingOrder={['desc','asc']} 
                    selectionModel={props.selectedRow}
                    onSelectionModelChange={newmodel => {props.setSelectedRow(newmodel)}}
                    initialState={{ 
                          sorting: { 
                              sortModel:[ 
                                  { 
                                     field:'sl_no', 
                                     sort:'asc', 
                                  }, 
                               ], 
                            }, 
                        }} 
 
                         sx={{ 
                               border: 0, 
                               "& .MuiDatGrid-cell":{ 
                                     color: "white" 
                                }, 
                               "& .MuiDataGrid-cellCheckboxInput":{ 
                                     color:"white" 
                                }, 
                                "&.MuiDataGrid-columnHeaderTitle":{ 
                                     whiteSpace:"break-spaces", 
                                     lineHeight:1, 
                                }, 
                                "& .MuiTablePagination-root":{ 
                                     color:"white" 
                                },  
                                "& .MuiButtonBase-root-MuiIconButton-root":{ 
                                     color: "white" 
                                }, 
                                '& .MuiCheckbox-root svg': {
                                    width: 15,
                                    height: 15,
                                    backgroundColor: 'transparent',
                                    border: `1px solid white`,
                                    borderRadius: 1,
                                  },
                                  '& .MuiCheckbox-root svg path': {
                                    display: 'none',
                                  },
                                  '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
                                    backgroundColor: '#1890ff',
                                    borderColor: '#1890ff',
                                  },
                                  '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
                                    position: 'absolute',
                                    display: 'table',
                                    border: '2px solid #fff',
                                    borderTop: 0,
                                    borderLeft: 0,
                                    transform: 'rotate(45deg) translate(-50%,-50%)',
                                    opacity: 1,
                                    transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
                                    content: '""',
                                    top: '50%',
                                    left: '39%',
                                    width: 5.71428571,
                                    height: 9.14285714,
                                  },
                                  '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
                                    width: 8,
                                    height: 8,
                                    backgroundColor: '#1890ff',
                                    transform: 'none',
                                    top: '39%',
                                    border: 0,
                                  },
                                  '& .MuiDataGrid-iconSeparator': {
                                    display: 'none',
                                  },
                                 color:'white' 
                        }} 
                    />
            </div> 
    ); 
}; 
export default MainGrid