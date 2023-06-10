import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Form } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useState} from 'react';
import ValidateForm from './ValidateForm';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    }
  }));
const ExpendituresForm = (props) =>{
    const classes = useStyles();
    const [formValues,setFormValues] = useState({ name : '',amount:0,date:'',type:'',description:''});
    const [formErrors,setFormErrors] = useState({name : '',amount:'',date:'',type:''});
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormValues({...formValues,[name]:value});
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        setFormErrors(ValidateForm(formValues));
        console.log(formErrors);
        if(formErrors.name === '' && formErrors.amount === '' && formErrors.type === '' && formErrors.date ==='')
        {
            alert('Good to go bitches');
        }
    }
    return(<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        className= {classes.modal}
        onClose={props.closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 200,
        }}>
        <Fade in={props.open}>
        <div className="container text-center">
            <Card variant="outlined">
                <CardContent>
                    <Form className={classes.formControl} onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <TextField
                                    error={formErrors.name === '' ? false : true}
                                    id="standard-error-helper-text"
                                    label="Name"
                                    name = "name"
                                    value = {formValues.name}
                                    onChange = {handleChange}
                                    helperText={formErrors.name === '' ? formErrors.name : null}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="standard-error-helper-text"
                                    label="Description Of Expenditure"
                                    variant="outlined"
                                    name = "description"
                                    value = {formValues.description}
                                    onChange = {handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    error={formErrors.amount === '' ? false : true}
                                    id="standard-error-helper-text"
                                    label="Amount"
                                    name = "amount"
                                    helperText={formErrors.amount === '' ? formErrors.amount : null}
                                    variant="outlined"
                                    type="number"
                                    value = {formValues.amount}
                                    onChange = {handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name = "type"
                                    value = {formValues.type}
                                    onChange = {handleChange}
                                    error = {formErrors.type === '' ? false : true}
                                    helperText = {formErrors.type === '' ? formErrors.type : null}
                                    >
                                    <MenuItem value="empty">Please Select a Value</MenuItem>
                                    <MenuItem value="Grocery">Grocery</MenuItem>
                                    <MenuItem value="OnlineOrders">Online Orders</MenuItem>
                                    <MenuItem value="Travel">Travel</MenuItem>
                                    <MenuItem value="Leisures">Leisures</MenuItem>
                                    <MenuItem value="Rent">Rent</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="dateOfExpenditure"
                                    label="choose a date"
                                    name = "date"
                                    value = {formValues.date}
                                    onChange={handleChange}
                                    error = {formErrors.date === '' ? false : true}
                                    helperText = {formErrors.date === '' ? formErrors.date : null}
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                    shrink: true,
                                }} />
                            </Grid>
                            <Grid item xs={4}>
                                <Button color="primary" type="submit" className="text-center" variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                    </Form>
                </CardContent>
            </Card>
        </div>
        </Fade>
    </Modal>);
}
export default ExpendituresForm;