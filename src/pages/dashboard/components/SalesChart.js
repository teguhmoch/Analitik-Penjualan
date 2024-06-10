import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      // Create a map to aggregate sales per product per day
      const salesPerProductPerDay = data.reduce((acc, item) => {
        const date = item.date;
        const product = item.product;
        const sales = item.sales;
        
        // Initialize the map if not exists
        if (!acc[date]) {
          acc[date] = {};
        }
        
        // Add or update sales for the product on the day
        if (!acc[date][product]) {
          acc[date][product] = sales;
        } else {
          acc[date][product] += sales;
        }
        
        return acc;
      }, {});

      // Extract dates and products
      const dates = Object.keys(salesPerProductPerDay);
      const products = Object.keys(data.reduce((acc, item) => {
        acc[item.product] = true;
        return acc;
      }, {}));

      // Create datasets for each product
      const datasets = products.map(product => {
        return {
          label: product,
          data: dates.map(date => salesPerProductPerDay[date][product] || 0),
          backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`,
          borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
          borderWidth: 1,
        };
      });

      // Destroy previous chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: dates,
          datasets: datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Sales',
                color: 'black',
                font: {
                  weight: 'bold',
                  size: 16,
                },
              },
            },
            x: {
              title: {
                display: true,
                text: 'Date',
                color: 'black',
                font: {
                  weight: 'bold',
                  size: 16,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className='my-4 bg-white p-4 rounded-md shadow border-t mt-2'>
      <h2 className="text-xl font-bold">Tabel Penjualan</h2>
      <div className='my-4'>
        <canvas ref={chartRef} />
      </div>
      
    </div>
  );
};

export default ChartComponent;
