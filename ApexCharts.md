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

#### How to change the series name in apex charts?
```
  const options = { labels: ["Dumbell", "Plates", "Gloves"] };
  const series = [20, 10, 20]; //our data
```
and pass it with the these parameters 
```
 <Chart
    options={options}
    series={series}
    type="donut"
    width="400" height="300"
    />
```


### Reference
-- [APEX Charts](http://https://apexcharts.com/react-chart-demos/ "APEX Charts")
-- [Simple Dount Charts](https://apexcharts.com/react-chart-demos/pie-charts/simple-donut/)
