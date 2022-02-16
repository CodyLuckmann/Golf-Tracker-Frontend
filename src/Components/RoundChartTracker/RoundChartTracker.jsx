import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';



const RoundChartTracker = (props) => {

    const jwt = localStorage.getItem('token');
    const [chartData, setChartData] = useState([]);
    const [totals, setTotals] = useState([]);

    useEffect(() => {
        getTotalsForCourse(1);
        something()
        
        
      },[]);
    
    
    async function getTotalsForCourse(course_id){
        console.log("Inside the function getTotalsForCourse")
        let response = await axios.get(`http://127.0.0.1:8000/api/playedhole/alldates/${course_id}`, {headers: {Authorization: 'Bearer ' + jwt}});
        setTotals(response.data);
        console.log("Course Totals: ", response.data);
    
    }

    const something = () => {
        let chartArray = []
        let headingsArray = ["Date", "Total Strokes"]
        chartArray[0] = headingsArray
 
        // i , 1 -> length of totals i++
            // tempArray = []
            // tempArry[0]=date,  1 strokes
            // charArray[i] = temp array

        console.log("Chart Array: ", chartArray) // [['Date", "Total Strokes"]]

        // for loop process totals array
            // using spread operator append the current rows array to the master array
    }
    let tempChartData = totals.map(entry =>{
        return [entry.date, entry.strokes__sum];
    });
    console.log("chartData: ", tempChartData)
    // setChartData(tempChartData);

    return(
        
        <Chart
        chartType="Line"
        data={[["Date", "Total Strokes"],[],[],[]]}
        width="100%"
        height="400px"
        legendToggle
        />
        
    );
}

export default RoundChartTracker;