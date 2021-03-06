import React from "react";
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const TimeGraph = (props) => {
    const queryTime = props.queryTime
    const mutationTime = props.mutationTime
    console.log('Here\'s the mutation data: ', mutationTime);
    const data = {
        labels: [...Array(Math.max(queryTime.length, mutationTime.length)).keys()],
        datasets: [
            {label: "Queries",
            data: queryTime,
            lineTension: 0.4,
            fill: true,
            borderColor: "#FE2C55",
            backgroundColor: "rgba(254, 44, 86, 0.1)",
            responsive: true
        },
        {label: "Mutations",
            data: mutationTime,
            lineTension: 0.4,
            fill:true,
            borderColor: "#25F4EE",
            backgroundColor:"rgba(37, 244, 237, 0.1)",
            responsive: true
        }]
    }

    return (
        <div className='w-100 h-auto'>
            <Line data = {data} options={
                {plugins:{
                    legend: { 
                        display: true, 
                        position:'bottom'
                    },
                    title: {
                        display:true, 
                        text:'Response Time', 
                    },
                    }
                }
            }/>
        </div>
    )
};

export default TimeGraph;