'use client'

import { useState } from "react";
import ApexChart from "../ApexChart";
import CardAttendance from "../card/Attendance";

type ShiftData = {
  [date: string]: number;
};

type AttendanceData = {
  Attend: ShiftData;
  Unattend: ShiftData;
  'Non Schedule': ShiftData;
  'Accumulation Attend': ShiftData;
  'Accumulation Un-attend': ShiftData;
  'Accumulation Non Schedule': ShiftData;
};

export default function AttendanceDaily({ value } : { value: AttendanceData }) {
    const [chartData, setChartData] = useState({
      options: {
        chart: {
            stacked: true,
            stackType: "100%",
            toolbar: {
              show: false,
            },
        },
        yaxis: [{
          tickAmount: 5,
            title: {
              text: 'Percentage',
              style: {
                color: '#f53939',
                fontWeight: 600,
              }
            },
        }, {
            opposite: true,
            tickAmount: 4,
            title: {
              text: 'Total',
              style: {
                color: '#f53939',
                fontWeight: 600,
              }
            }
        }],
        dataLabels: {
          enabled: false,
        },
        labels: Object.keys(value.Attend)
    },
    series: [{
        name: 'Attend',
        // type: 'bar',
        data: Object.values(value.Attend)
      },
      {
        name: 'Un-attend',
        // type: 'bar',
        data: Object.values(value.Unattend)
      },
      {
        name: 'Non Schedule',
        // type: 'bar',
        data: Object.values(value["Non Schedule"])
      },
      {
        name: 'Accumulation Attend',
        // type: 'bar',
        data: Object.values(value["Accumulation Attend"])
      },
      {
        name: 'Accumulation Un-attend',
        // type: 'line',
        data: Object.values(value["Accumulation Un-attend"])
      },
      {
        name: 'Accumulation Non Schedule',
        // type: 'line',
        data: Object.values(value["Accumulation Non Schedule"])
      }]
    })

    return <CardAttendance title={'Daily'}>
        <ApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={300}
              width={900}
            />
    </CardAttendance>
}