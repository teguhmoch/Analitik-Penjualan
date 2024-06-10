import React from "react";

const Statistic = ({ data }) => {
    // Calculate total sales
    const totalSales = data.reduce((total, item) => total + item.sales, 0).toLocaleString();

    // Calculate total revenue
    const totalRevenue = data.reduce((total, item) => total + item.revenue, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  
  
    // Find product with the highest sales
    const mostSoldProduct = data.reduce((maxProduct, item) => (item.sales > maxProduct.sales ? item : maxProduct), data[0]);

  
    return (
      <div className="bg-white p-4 rounded-md shadow border-t mt-2">
        <h2 className="text-xl font-bold mb-4">Statistic</h2>
        <div className="flex justify-between mb-2">
          <div className="border rounded-lg p-4 w-1/4">
            <p className="text-sm text-gray-600">Total Sales</p>
            <p className="text-lg font-semibold">{totalSales}</p>
          </div>
          <div className="border rounded-lg p-4 w-1/4">
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-lg font-semibold">{totalRevenue}</p>
          </div>
          <div className="border rounded-lg p-4 w-1/4">
            <p className="text-sm text-gray-600">Product Terlaris</p>
            <p className="text-lg font-semibold">{mostSoldProduct && mostSoldProduct.product}</p>
        </div>

        </div>
      </div>
    );
  };

  export default Statistic;