import React, { useState, useEffect, ReactApexChart } from "react";

function LineGraph() {
  const [state, setState] = useState([]);

  //   setState({
  //     series: [
  //       {
  //         data: data.slice(),
  //       },
  //     ],
  //     options: {
  //       chart: {
  //         id: "realtime",
  //         height: 350,
  //         type: "line",
  //         animations: {
  //           enabled: true,
  //           easing: "linear",
  //           dynamicAnimation: {
  //             speed: 1000,
  //           },
  //         },
  //         toolbar: {
  //           show: false,
  //         },
  //         zoom: {
  //           enabled: false,
  //         },
  //       },
  //       dataLabels: {
  //         enabled: false,
  //       },
  //       stroke: {
  //         curve: "smooth",
  //       },
  //       title: {
  //         text: "Dynamic Updating Chart",
  //         align: "left",
  //       },
  //       markers: {
  //         size: 0,
  //       },
  //       xaxis: {
  //         type: "datetime",
  //         range: XAXISRANGE,
  //       },
  //       yaxis: {
  //         max: 100,
  //       },
  //       legend: {
  //         show: false,
  //       },
  //     },
  //   });

  useEffect(() => {
    window.setInterval(() => {
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      });
      fetchData();

      ApexCharts.exec("realtime", "updateSeries", [
        {
          data: state.series[0].data,
        },
      ]);
    }, 1000);
  });

  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/cardano")
      .then((res) => res.json())
      .then((response) => setState(response))
      .catch((e) => console.log(e));
  };

  //   render() {
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series[0].data}
        type="line"
        height={350}
      />
    </div>
  );
}
export default LineGraph;

// const domContainer = document.querySelector("#app");
// ReactDOM.render(React.createElement(ApexChart), domContainer);
