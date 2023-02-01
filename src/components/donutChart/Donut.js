import React,{ useState } from 'react';
import Chart from 'react-apexcharts'

function Donut() {

        const [series,setSeries]=useState([44,55])
        const [chartOptions,setChartOptions]=useState({
            labels: ['Female','Male'] ,
            fill: {colors: ['#FDBAB1','#63D0B4']},
            legend: {markers: {  fillColors:['#FDBAB1','#63D0B4']}},
            tooltip: { fillColors:['#FDBAB1','#63D0B4']}
        })
        return (
        <div className="donut">
            <Chart options={chartOptions} series={series} type="donut" width="380" />
        </div>
        );
    }


export default Donut;