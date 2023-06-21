import React , {useState} from 'react'
import Chart from 'react-apexcharts'
import './area.css'
function AreaChart() {
    const [properties,setProp]=useState({
            series: [{
              name: 'معدل الحضور',
              data: [31, 40, 28, 51, 42, 109, 100,28, 51, 42, 109, 100]
            }, {
              name: 'معدل الغياب',
              data: [11, 32, 45, 32, 34, 52, 41 , 45, 32, 34, 52, 41]
            }],
            options: {
              chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'String',
                categories: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو" , "اغسطس" , "سبتمبر" , "اكتوبر" , "نوفمبر" , "ديسمبر"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          })

  return (
    <div>
      <Chart options={properties.options} series={properties.series} type="area" height={350} />
    </div>
  )
}

export default AreaChart
