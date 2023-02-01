import React,{ useState } from 'react';
import Chart from 'react-apexcharts'
import './donut.css'
function Donut() {

        const [series,setSeries]=useState([100,200])
        const [chartOptions,setChartOptions]=useState({
            labels: ['طالبات','طلاب'] ,
            fill: {colors: ['#FDBAB1','#63D0B4']},
            legend: {markers: {  fillColors:['#FDBAB1','#63D0B4']}}
        })
        return (
        <div className='row'>
            <div className="donut col-4">
                <span className='title'>الطلاب</span>
                <Chart options={chartOptions} series={series} type="donut" />
            </div>
        </div>
        );
    }


export default Donut;