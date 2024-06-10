import React, { Component } from "react";

const SalesSearch = ({ searchTerm, handleSearch }) => {
    return (
        <div className="flex items-center justify-end space-x-4">
            <div className="flex flex-col">
                <label className="text-gray-600">Search :</label>
                <input type="text" placeholder="Search by product..." value={searchTerm} onChange={(e) => handleSearch(e.target.value)} 
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
        </div>

    )
}

export default SalesSearch;