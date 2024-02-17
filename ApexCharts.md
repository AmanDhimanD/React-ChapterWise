# APEX Charts in ReactJS

Install apex charts 

`npm install react-apexcharts --save`

###### How to use?
`import Chart from "react-apexcharts";`

    import React from 'react'
    import Chart from "react-apexcharts";
    
    const App = () => {
    
        const options = {
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
        return (
            <>
                <Chart
                    options={options}
                    series={options.series}
                    type="donut"
                    width="500" height="300"
                />
            </>
        )
    }
    
    export default App

------------
### Reference
-- [APEX Charts](http://https://apexcharts.com/react-chart-demos/ "APEX Charts")
-- [Simple Dount Charts](https://apexcharts.com/react-chart-demos/pie-charts/simple-donut/)
