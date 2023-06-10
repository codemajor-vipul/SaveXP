import { DataGrid } from '@material-ui/data-grid';
const Savings = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
          { field: 'month', headerName: 'Month', width: 200 },
          {
            field: 'year',
            headerName: 'Year',
            width: 260,
            type:'number'
          },
          {
            field: 'amount',
            headerName: 'Amount(Rupees)',
            sortable: false,
            width: 200
          },
        ];
        
        const rows = [
          { id:1, month: 'January', year: 2021, amount : 3100 },
          { id:2, month: 'February', year: 2021, amount : 3100 },
          { id:3, month: 'March', year: 2021, amount : 3100 },
          { id:4, month: 'April', year: 2021, amount : 3100 },
          { id:5, month: 'May', year: 2021, amount : 3100 },
          { id:6, month: 'June', year: 2021, amount : 3100 },
          { id:7, month: 'July', year: 2021, amount : 3100 },
          { id:8, month: 'August', year: 2021, amount : 3100 },
          { id:9, month: 'September', year: 2021, amount : 3100 },
          { id:10, month: 'October', year: 2021, amount : 3100 },
          { id:11, month: 'November', year: 2021, amount : 3100 },
          { id:12, month: 'December', year: 2021, amount : 3100 },
        ];
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }} >
            <div style={{ height: 500, width: '80%'}} className="my-4">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                />
            </div>
    </div>
    );
};

export default Savings;