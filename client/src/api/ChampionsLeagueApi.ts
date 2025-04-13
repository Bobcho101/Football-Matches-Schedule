import { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import { errorMessages } from "../utils/errorMessages";


export const useFetchChampionsLeagueMatches = () => {
    const [data, setData] = useState<object>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string| null>(null);

    useEffect(() => {
        const url: string = `http://localhost:5000/matches/cl/${API_KEY}`;
        const fetchData = async () => {
            fetch(url, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            .then((response) => {
                if(!response.ok){
                    throw new Error(errorMessages.failedFetch);
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
        }
        fetchData();
    }, []);

    return { data, loading, error };
}

