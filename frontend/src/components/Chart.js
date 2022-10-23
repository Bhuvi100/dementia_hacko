import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Puzzle",
      borderColor: "orange",
      backgroundColor: "orange",
      borderWidth: 2,
      fill: false,
      data: [4, 2, 5, 6, 7, 2, 4],
    },
    {
      type: "line",
      label: "Memory Test",
      data: [43, 34, 62, 31, 23, 27, 44],
      borderColor: "red",
      backgroundColor: "red",
      borderWidth: 2,
    },
    {
      type: "line",
      label: "Medical Report",
      data: [75, 3, 54, 3],
      borderColor: "rgb(26, 183, 191)",
      backgroundColor: "rgb(26, 183, 191)",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Overall Progress",
      backgroundColor: "rgb(105, 67, 164)",
      data: [87, 34, 46, 73, 89, 43, 65],
    },
  ],
};

export default function ChartComponent() {
  return <Chart type="bar" data={data} />;
}
