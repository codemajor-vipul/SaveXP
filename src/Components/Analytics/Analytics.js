import { Grid } from "@material-ui/core";
import { Select } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import SavingsMonthWise from "./MonthySavingsAnalytics";
import { FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ExpenditureTypeWiseAnalytics from "./ExpenditureTypeWiseAnalytics";
const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
    }
}));
const Analytics = () => {
   const classes = useStyles();
    return(
        <div className="text-center">
            <FormControl className={classes.formControl}>
                    <Select
                        id="demo-simple-select"
                        name = "type"
                        value="2021"
                        >
                        <MenuItem value="2021">2021</MenuItem>
                        <MenuItem value="2020">2020</MenuItem>
                        <MenuItem value="2019">2019</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <SavingsMonthWise />    
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.formControl}>
                            <Select
                                id="demo-simple-select"
                                name = "type"
                                value="January"
                                >
                                <MenuItem value="January">January</MenuItem>
                                <MenuItem value="February">February</MenuItem>
                                <MenuItem value="March">March</MenuItem>
                                <MenuItem value="April">April</MenuItem>
                                <MenuItem value="May">May</MenuItem>
                                <MenuItem value="June">June</MenuItem>
                                <MenuItem value="July">July</MenuItem>
                                <MenuItem value="August">August</MenuItem>
                                <MenuItem value="September">September</MenuItem>
                                <MenuItem value="October">October</MenuItem>
                                <MenuItem value="November">November</MenuItem>
                                <MenuItem value="December">December</MenuItem>
                            </Select>
                        </FormControl>
                        <ExpenditureTypeWiseAnalytics />    
                    </Grid>
                    <Grid item xs={6}>
                        <SavingsMonthWise />    
                    </Grid>
                    <Grid item xs={6}>
                        <SavingsMonthWise />    
                    </Grid>
                </Grid>
        </div>
        
    );
};

export default Analytics;