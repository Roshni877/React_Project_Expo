import React, { useRef, useEffect, useState } from "react";
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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#1e293b",
      },
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#0ea5e9",
      bodyColor: "#1e293b",
      borderColor: "rgba(14, 165, 233, 0.2)",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#1e293b",
      },
      grid: {
        color: "rgba(0,0,0,0.05)",
      },
    },
    y: {
      ticks: {
        color: "#1e293b",
      },
      grid: {
        color: "rgba(0,0,0,0.05)",
      },
    },
  },
};

function ChartComponent() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sea Level Rise (mm)",
        data: [10, 12, 15, 18, 20, 22],
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.2)", // fallback color
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#0ea5e9",
      },
    ],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(14, 165, 233, 0.4)");
    gradient.addColorStop(1, "rgba(14, 165, 233, 0)");

    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sea Level Rise (mm)",
          data: [10, 12, 15, 18, 20, 22],
          borderColor: "#0ea5e9",
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: "#0ea5e9",
        },
      ],
    });
  }, []);

  return (
    <div className="chart-box">
      
      {/* STATS */}
      <div className="chart-stats">
        <div>
          <h4 style={{ color: '#475569' }}>Max Rise</h4>
          <p style={{ color: '#1e293b', fontWeight: 800 }}>22 mm</p>
        </div>
        <div>
          <h4 style={{ color: '#475569' }}>Avg Rise</h4>
          <p style={{ color: '#1e293b', fontWeight: 800 }}>16 mm</p>
        </div>
        <div>
          <h4 style={{ color: '#475569' }}>Trend</h4>
          <p style={{ color: '#059669', fontWeight: 800 }}>Increasing 📈</p>
        </div>
      </div>

      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
}

export default ChartComponent;