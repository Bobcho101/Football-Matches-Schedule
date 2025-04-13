import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000; 


app.use(cors());

app.get('/matches/cl/:apiKey', async (req, res) => {
    const apiKey = req.params.apiKey;
    try {
        const response = await axios.get('https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED', {
            headers: {
                'X-Auth-Token': apiKey, 
            },
        });
        res.json(response.data);
    } catch (err) {
        console.log(err.message);
    }
});

app.get('/matches/pl/:apiKey', async (req, res) => {
    const apiKey = req.params.apiKey;
    try {
        const response = await axios.get('https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED', {
            headers: {
                'X-Auth-Token': apiKey, 
            },
        });
        res.json(response.data);
    } catch (err) {
        console.log(err.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});