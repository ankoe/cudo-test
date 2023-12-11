"use client";

import { useState } from "react";
import CardToday from "../card/Today";
import ApexChart from "../ApexChart";

type CardAttendance = {
  Total: number;
  Attend: number;
};

export default function TodayAttendance({ value }: { value: CardAttendance }) {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            },
          },
        },
      },
      colors: ["#4f81af", "#ffbc79"],
      labels: ["Attend", "Un-Attend"],
      legend: {
        show: false,
      },
    },
    annotations: {
      points: [
        {
          x: 50, // Koordinat x di tengah
          y: 50, // Koordinat y di tengah
          label: {
            text: "Teks di Tengah",
            style: {
              fontSize: "15px",
              color: "#333",
            },
          },
        },
      ],
    },
    series: [value.Attend, value.Total - value.Attend],
  });

  return (
    <CardToday title={"Attendance"}>
      <ApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width={200}
      />
    </CardToday>
  );
}
