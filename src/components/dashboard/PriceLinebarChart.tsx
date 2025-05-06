"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ApexCharts to avoid SSR issues
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const PriceHistoryChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Opening Price",
        data: [100, 102, 101, 105, 110, 108, 112],
      },
      {
        name: "Closing Price",
        data: [101, 104, 102, 107, 111, 110, 115],
      },
    ],
    options: {
      chart: {
        id: "area-chart",
        type: "area" as const, 
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: true },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const, 
      },
      xaxis: {
        type: "datetime" as const,
        categories: [
          "Dec 1", "Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7", 
        ],
        labels: {
          rotate: -45, 
          show: true,
        },
        tickAmount: 7,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
        shared: true,
        intersect: false,
        y: {
          formatter: (value: number) => `$${value.toFixed(2)}`,
        },
      },
      fill: {
        type: "gradient" as const, 
        gradient: {
          type: "vertical" as const,
          shadeIntensity: 0.5,
          gradientToColors: ["#D83DFF"],
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.3,
        },
      },
      colors: ["#1E90FF", "#D83DFF"],
      legend: {
        position: "top" as const,
      },
    },
  });
  return (
    <div className="apexchart-area-wrapper">
      <div className="row wow fadeInUp">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title1">
            <h3 className="section-main-title3">Price History</h3>
          </div>
        </div>
      </div>
      <ApexCharts
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default PriceHistoryChart;

