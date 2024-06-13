/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: true,
      },
    },
  },
  elements: {
    point: {
      radius: 2, // Decrease point radius to 2
    },
  },
};

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

const data = {
  labels,
  datasets: [
    {
      label: "Network Traffic",
      data: [
        10, 15, 12, 18, 15, 16, 17, 14, 12, 18, 15, 16, 17, 14, 12, 18, 15,
        16, 17, 14, 12, 18, 15, 16, 17, 14, 12, 18, 15, 16,
      ],
      borderColor: "#c6f7d3",
      backgroundColor: "#c6f7d3",
      pointRadius: 2, // Decrease point radius to 2
    },
  ],
};

const ChartComponent = ({ topic ="BTC/ETH", subTopic="Prepatual" }) => {
  const [graphData, setGraphData] = useState(data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraphData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data.map((dataPoint) => {
            const randomValue = Math.floor(Math.random() * 10);
            return dataPoint + randomValue;
          }),
        })),
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ maxWidth: "100%", maxHeight: "50%" , position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "#c6f7d3",
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{topic}</span>  {subTopic}
      </div>
      <div style={{ paddingTop:"2rem" }}>
      <Line options={options} data={graphData} />
      </div>
      
    </div>
  );
};

export default ChartComponent;