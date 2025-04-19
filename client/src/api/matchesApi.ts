import { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import { errorMessages } from "../utils/errorMessages";


type League = "CL" | "PL" | "PD" | "FL1";

interface HomeTeam{
    shortName: string;
    id: number;
}

interface AwayTeam{
    shortName: string;
    id: number;
}
interface Match{
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    id: number;
    utcDate: Date,
}



export const useFetchMatches = (league: League) => {
    const [ matches, setMatches ] = useState<Match[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        const url: string = `http://localhost:5000/matches/${league}/${API_KEY}`;
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
            .then((data) => {
                data = data.matches;
                data = Object.values(data)
                return setMatches(data)
            })
            .catch(() => {
                setError(errorMessages.failedFetch);
            })
            .finally(() => {
                setLoading(false);
            });
        }
        fetchData();
    }, [league]);

    return { matches, loading, error };
}

