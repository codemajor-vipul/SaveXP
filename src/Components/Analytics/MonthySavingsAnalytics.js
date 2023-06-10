import { Line } from "react-chartjs-2";
const SavingsMonthWise =() =>{
    const dataForBarGraph = (canvas) => {
        var context = canvas.getContext('2d');
        let gradient = context.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradient.addColorStop(1, 'rgba(254, 112, 150, 1)');
        return({
        labels: ['January', 'February', 'March', 'April', 'June', 'July','August','September','October','November','December'],
        datasets: 
        [{
            label: '# of Votes',
            data: [2000,3350,3980,4400,500,2664,1700,1880,2900,1000,1500,2000],
            fill: true,
            backgroundColor: gradient,
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
        });
    }
    return(
        <div>
                  <Line
                    data={dataForBarGraph}
                    options={{
                        elements: {
                            point: {
                                radius: 3
                            },
                            line: {
                                tension: 0
                            }
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }
                        },
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}
                  />
              </div>
    );
}

export default SavingsMonthWise;