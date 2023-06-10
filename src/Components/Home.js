import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
const Home = () =>{

    useEffect(() => 
    {
        fetch("https://localhost:7018/WeatherForecast/GetExpenditurePercentage")
        .then(resp => {
          console.log(resp);
          return resp.text();
        })
        .then(data => {
          console.log(data);
        });
    });

    return(
    <div className="container">
    <h3 className="text-center my-3">Welcome! Your Monthly Expenditures are as below</h3>
    <div className="w-25">
      <CircularProgressbar  value='30' maxValue="100" text="Expenditure-30%" styles={buildStyles({
        strokeLinecap: 'round',
        textSize: '9px',
        pathColor: `rgba(245, 39, 39, 1)`,
        trailColor: "rgba(39, 245, 58, 0.5)",
        pathTransitionDuration: 2  
      })}  />
    </div>
  </div>);
}
export default Home;