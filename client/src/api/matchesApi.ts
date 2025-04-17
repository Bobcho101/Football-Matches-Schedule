import { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import { errorMessages } from "../utils/errorMessages";

const BASE_URL_MAIN_API: string = "https://api.football-data.org/v4/competitions";

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

type League = "CL" | "PL" | "PD" | "FL1";

export const useFetchMatches = (league: League) => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        //const url: string = `http://localhost:5000/matches/${league}/${API_KEY}`;
        const url: string = `${BASE_URL_MAIN_API}/${league}/matches?status=SCHEDULED`;
        const fetchData = async () => {
            fetch(url, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            .then((response) => {
                console.log(response);
                
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

