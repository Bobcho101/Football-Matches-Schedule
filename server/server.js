import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000; 

const API_KEY = 'b0c8be1c0034422f8d3c7f381c617611';

app.use(cors());

app.get('/matches/cl', async (req, res) => {
    try {
        const response = await axios.get('https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED', {
            headers: {
                'X-Auth-Token': API_KEY, 
            },
        });

        res.json(response.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: 'Something went wrong while fetching the data.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});