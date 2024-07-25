/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { UniversalContext } from '../context/UniversalContext';
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
      pointRadius: 1,
      borderWidth: 1,
      tension: 0.4, // Add this line to control the smoothness of the line
    },
  ],
};

const ChartComponent = ({ topic = "BTC/ETH", subTopic = "Prepatual" }) => {
  const [graphData, setGraphData] = useState(data);
  const { getValue } = useContext(UniversalContext);

  const createOptions = (primaryColor) => ({
    responsive: true,
    maintainAspectRatio: false,
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
          display: false,
        },
      },
      y: {
        ticks: {
          display: true,
          color: primaryColor
        },
        
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 1, 
      },
    },
  });

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
          borderColor: getValue('primary'),
          backgroundColor: getValue('primary'),
          
        })),
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [getValue]);

  useEffect(() => {
    setGraphData((prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset) => ({
        ...dataset,
        borderColor: getValue('primary'),
        backgroundColor: getValue('primary'),
       
      })),
    }));
  }, [getValue]);

  return (
    <div style={{ width: "100%", height: "fit-content", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: getValue('primary'),
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{topic}</span> {subTopic}
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <Line style={{ height: 50,width: '15rem' }} options={createOptions(getValue('primary'))} data={graphData} />
      </div>
    </div>
  );
};

export default ChartComponent;