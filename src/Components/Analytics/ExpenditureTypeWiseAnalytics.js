import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    doughnut: {
      maxHeight: 350,
    }
}));
const ExpenditureTypeWiseAnalytics = () =>{
    const classes = useStyles();
    const dataForBarGraph = {
        labels: ['Leisure', 'Rent', 'Grocery', 'Travel', 'Online Orders'],
        datasets: [{
                          label: '# of Votes',
                          data: [25,30,15,10,20],
                          fill: true,
                          backgroundColor: [
                            'rgb(163, 160, 251)',
                            'rgb(255, 131,115)',
                            'rgb(255, 218, 131)',
                            'rgb(85, 216, 254)',
                            'rgb(255, 99, 132)'
                          ],
                          borderColor: [
                            'rgba(163, 160, 251, 1)',
                            'rgba(255, 131,115, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(85, 216, 254, 1)',
                            'rgba(255,99,132,1)'
                          ],
                          borderWidth: 1
                      }]
    };
    return(
        <div >
                  <Doughnut className={classes.doughnut}
                    data={dataForBarGraph}
                    options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true }
                    }}
                  />
              </div>
    );
}

export default ExpenditureTypeWiseAnalytics;