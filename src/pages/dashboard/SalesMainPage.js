import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SalesSearch from './components/SalesSearch';
import SalesFilter from './components/SalesFilter';
import SalesTable from './components/SalesTable';
import SalesChart from './components/SalesChart';
import Statistic from './components/Statistic';

const SalesMain = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        try {
            let url = 'http://localhost:8000/data';
            if (searchTerm) {
              console.log(searchTerm);
                url = `http://localhost:8000/data?product=${searchTerm}`;
            } else if (startDate && endDate) {
                url = `http://localhost:8000/data?start_date=${startDate}&end_date=${endDate}`;
            }

            console.log("Fetching data from URL:", url); 

            const response = await axios.get(url);
            console.log("API Response:", response.data);
            
            if  (Array.isArray(response.data)) {
              // Log the API response
              setData(response.data); // Update data state
              setFilteredData(response.data); 
            } else {
              console.error('API response is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
  }, [searchTerm, startDate, endDate]);
  console.log("Data:", data);
  console.log('filter', filteredData); 

  return (
    <div>
      <header>
        <div className='flex justify-between mx-4'>
          <SalesSearch searchTerm={searchTerm} handleSearch={setSearchTerm} />
          <SalesFilter
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={setStartDate}
          handleEndDateChange={setEndDate}
        />
        </div>
            <Statistic data={filteredData} />
            <SalesChart data={filteredData} />
            <SalesTable data={filteredData} /> 
      </header>
    </div>
  );
};

export default SalesMain;