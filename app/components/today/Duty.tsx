"use client";

import CardToday from "../card/Today";
import { useState } from "react";
import ApexChart from "../ApexChart";

type CardDuty = {
  Total: number;
  "On Duty": number;
};

export default function TodayDuty({ value }: { value: CardDuty }) {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
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
      colors: ["#ffbc79", "#4f81af"],
      labels: ["Leave", "On Duty"],
      legend: {
        show: false,
      },
    },
    series: [value.Total - value["On Duty"], value["On Duty"]],
  });

  return (
    <CardToday title={"On Duty"}>
      <ApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width={200}
      />
    </CardToday>
  );
}
