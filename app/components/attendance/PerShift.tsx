"use client";

import { useState } from "react";
import ApexChart from "../ApexChart";
import CardAttendance from "../card/Attendance";

type ShiftType = {
  [shift: string]: number;
};

type AttendanceType = {
  "00:00 - DRIVER NON PIKET": number;
  "00:00 - DRIVER PIKET": number;
  "00:00 - OB PAGI": number;
  "00:00 - SECURITY PAGI": number;
  "01:00 - RECEPTIONIST": number;
  "03:00 - OB MIDDLE": number;
  "04:00 - SECURITY MIDDLE": number;
};

type AttendanceData = {
  Attend: AttendanceType;
  "Un-attend": AttendanceType;
  "Late Check-in": AttendanceType;
  "Non Schedule": AttendanceType;
  "Total Attend": AttendanceType;
  "Total Un-attend": AttendanceType;
  "Total Late Check-in": AttendanceType;
  "Total Non Schedule": AttendanceType;
};

export default function AttendancePerShift({
  value,
}: {
  value: AttendanceData;
}) {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false,
        },
      },
      yaxis: [
        {
          tickAmount: 5,
          title: {
            text: "Percentage",
            style: {
              color: "#f53939",
              fontWeight: 600,
            },
          },
        },
        {
          opposite: true,
          tickAmount: 4,
          title: {
            text: "Total",
            style: {
              color: "#f53939",
              fontWeight: 600,
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      labels: Object.keys(value.Attend),
    },
    series: [
      {
        name: "Attend",
        // type: 'column',
        data: Object.values(value.Attend),
      },
      {
        name: "Un-attend",
        // type: 'bar',
        data: Object.values(value["Un-attend"]),
      },
      {
        name: "Late Check-in",
        // type: 'bar',
        data: Object.values(value["Late Check-in"]),
      },
      {
        name: "Non Schedule",
        // type: 'bar',
        data: Object.values(value["Non Schedule"]),
      },
      {
        name: "Total Attend",
        // type: 'line',
        data: Object.values(value["Total Attend"]),
      },
      {
        name: "Total Un-attend",
        // type: 'line',
        data: Object.values(value["Total Un-attend"]),
      },
      {
        name: "Total Late Check-in",
        // type: 'line',
        data: Object.values(value["Total Late Check-in"]),
      },
      {
        name: "Total Non Schedule",
        // type: 'line',
        data: Object.values(value["Total Non Schedule"]),
      },
    ],
  });

  return (
    <CardAttendance title={"Per Shift"}>
      <ApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={300}
        width={900}
      />
    </CardAttendance>
  );
}
