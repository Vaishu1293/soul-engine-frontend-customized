"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import ApexCharts to avoid SSR issues
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexchartsAreaDatetime = () => {
    const [timeRange, setTimeRange] = useState<"day" | "month" | "year">("month");

    const options = {
        chart: {
            id: "area-datetime-chart",
            zoom: { enabled: true },
            toolbar: { show: false },
        },
        dataLabels: { enabled: true },
        stroke: { curve: "smooth" as const },
        xaxis: {
            type: "datetime" as const,
            labels: { show: false },
        },
        tooltip: {
            x: { format: "dd MMM yyyy" },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#D83DFF"],
                inverseColors: true,
                opacityFrom: 0.5,
                opacityTo: 0.2,
                stops: [0, 100],
            },
        },
        colors: ["#7A44FF"],
    };

    // Data based on time range
    const getDataForTimeRange = (range: "day" | "month" | "year") => {
        switch (range) {
            case "day":
                return [
                    { x: new Date("2023-12-23").getTime(), y: 350 },
                    { x: new Date("2023-12-24").getTime(), y: 400 },
                    { x: new Date("2023-12-25").getTime(), y: 450 },
                    { x: new Date("2023-12-26").getTime(), y: 500 },
                ];
            case "month":
                return [
                    { x: new Date("2023-01-01").getTime(), y: 350 },
                    { x: new Date("2023-02-01").getTime(), y: 400 },
                    { x: new Date("2023-03-01").getTime(), y: 450 },
                    { x: new Date("2023-04-01").getTime(), y: 500 },
                    { x: new Date("2023-05-01").getTime(), y: 550 },
                    { x: new Date("2023-06-01").getTime(), y: 600 },
                    { x: new Date("2023-07-01").getTime(), y: 650 },
                    { x: new Date("2023-08-01").getTime(), y: 700 },
                    { x: new Date("2023-09-01").getTime(), y: 750 },
                    { x: new Date("2023-10-01").getTime(), y: 800 },
                    { x: new Date("2023-11-01").getTime(), y: 850 },
                    { x: new Date("2023-12-01").getTime(), y: 900 },
                ];
            case "year":
                return [
                    { x: new Date("2023-01-01").getTime(), y: 350 },
                    { x: new Date("2023-06-01").getTime(), y: 600 },
                    { x: new Date("2023-12-01").getTime(), y: 900 },
                ];
            default:
                return [];
        }
    };

    // Get the series data based on the selected time range
    const series = [
        {
            name: "Visitors",
            data: getDataForTimeRange(timeRange),
        },
    ];

    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-6">
                    <div className="section-title">
                        <h3 className="section-main-title">Market Viewer</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6">
                    <div className="time-range-buttons d-flex gap-2">
                        <button
                            className={` ${timeRange === "day" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                            onClick={() => setTimeRange("day")}
                        >
                            Day
                        </button>
                        <button
                            className={`btn ${timeRange === "month" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                            onClick={() => setTimeRange("month")}
                        >
                            Month
                        </button>
                        <button
                            className={`btn ${timeRange === "year" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                            onClick={() => setTimeRange("year")}
                        >
                            Year
                        </button>
                    </div>
                </div>
            </div>
            <ApexCharts options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default ApexchartsAreaDatetime;

