import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useState} from 'react';
import ExpendituresForm from './ExpendituresForm';
import { DataGrid } from '@material-ui/data-grid';
const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }));
const Expenditure = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
          field: 'type',
          headerName: 'Type Of Expenditure',
          width: 260
        },
        {
          field: 'description',
          headerName: 'Description',
          width: 300
        },
        {
          field: 'date',
          headerName: 'Date Of Expenditure',
          type: 'date',
          width: 260
        },
        {
          field: 'amount',
          headerName: 'Amount(Rupees)',
          sortable: false,
          width: 200
        },
      ];
      
      const rows = [
        { id:1, name: 'Vipul', type: 'Leisure', description: 'went to a restaurant', date: '2021/03/24', amount : 3100 },
        {id:2, name: 'Ayushi', type: 'Travel', description: 'Gokarna !', date: '2021/04/24', amount : 3100 },
        { id:3,name: 'Vishal', type: 'Rent', description: 'flat', date: '2021/03/24', amount : 2000 },
        { id:4,name: 'Saubhagya', type: 'Grocery', description: 'Ration for the month', date: '2021/03/24', amount : 3100 },
        {id:5, name: 'Ankit', type: 'Leisure', description: 'went to a dog park', date: '2021/03/24', amount : 3100 },
        { id:6,name: 'Sushant', type: 'Travel', description: 'went to honeymoon', date: '2021/03/24', amount : 3100 },
        { id:7,name: 'Vivek', type: 'Rent', description: 'Rent of Hyderabad Accomodation', date: '2021/03/24', amount : 3100 },
        { id:8,name: 'Vipul', type: 'OnlineOrders', description: 'Got chinos', date: '2021/03/24', amount : 3100 },
      ];
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    
    const openModal = () =>{
        setOpen(true);
    }
    const closeModal = () =>{
        setOpen(false);
    }
    return(
        <div className="container text-center">
            <div className="my-4">
                <div style={{ height: 500, width: '100%',marginTop: '20px' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                    />
                </div>
                    <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon onClick={openModal} />
                    </Fab> 
            </div>
            <div>
                <ExpendituresForm open={open} closeModal={closeModal} />
            </div>
        </div>
    );
};

export default Expenditure;