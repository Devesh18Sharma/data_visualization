import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import Visualizations from './Visualizations';
import { getChartData } from './api';

const App = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchChartData();
    }, []);

    const fetchChartData = async () => {
        const data = await getChartData();
        if (data) {
            setChartData(data);
        }
    };

    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <Filters />
            <Visualizations data={chartData} />
        </div>
    );
};

export default App;
