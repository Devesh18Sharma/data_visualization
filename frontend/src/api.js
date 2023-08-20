import axios from 'axios';

const API_BASE_URL = '/api/'; // The API base URL

export const getChartData = async (params) => {
    try {
        const response = await axios.get(`${API_BASE_URL}chart-data/`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching chart data:', error);
        return null;
    }
};
