import React ,{ Component } from "react";

const SalesTable = ((data) => {
    const datas = data.data; 
    console.log(datas);

    if (!Array.isArray(datas)) {
        return <div>Data is not available</div>;
        }
            
    return(
        <div className="my-8 bg-white p-4 rounded-md shadow border-t mt-2">
            <h2 className="text-xl font-bold">Tabel Penjualan</h2>
            <div className="overflow-x-auto my-4"> 
            <table className="table-auto min-w-full divide-y divide-gray-200 border border-gray-300 border-collapse rounded-lg">
            <thead>
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {datas.map((item)=> (
                    <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.product}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.sales}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.revenue}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
    );
});

export default SalesTable;