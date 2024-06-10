import React, { Component } from "react";

const SalesFilter = ({ startDate, endDate, handleStartDateChange, handleEndDateChange }) => {
    return (
        <div className="flex items-center justify-start space-x-4">
            <div className="flex flex-col">
                <label htmlFor="startDate" className="text-gray-600">Start Date:</label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => handleStartDateChange(e.target.value)} 
                className="border border-gray-300 px-3 py-2 mt-1 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="endDate" className="text-gray-600">End Date:</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => handleEndDateChange(e.target.value)} 
                className="border border-gray-300 px-3 py-2 mt-1 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
        </div>

    )
}

export default SalesFilter;