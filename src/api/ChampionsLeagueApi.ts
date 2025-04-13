import { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import { errorMessages } from "../utils/errorMessages";


export const useFetchChampionsLeagueMatches = () => {
    const [data, setData] = useState<object>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string| null>(null);

    useEffect(() => {
        const url: string = 'https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED';
        const fetchData = async () => {
            try{
                const response = await fetch(url, {
                    headers: {
                        'X-Auth-Token': API_KEY,
                    },
                });

                if(!response.ok){
                    throw new Error(errorMessages.failedFetch);
                }
                const res: object = await response.json();
                setData(res);
            } catch (err: any) {
                console.log(err);
                setError(err.message);
            } finally {
                setLoading(false); 
            }
        } 
        fetchData();
    }, []);
    return { data, loading, error };
}