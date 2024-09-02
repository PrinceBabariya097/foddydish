import { useState, useEffect } from 'react';

// Define a type for the return value of the useFetch hook

export default function useFetch({ url,search, catagory, currentPage, limit }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                let query
                if (limit) query = `?page=${currentPage}&limit=${limit}`
                if (search && search !== '') query += `&search=${search}`
                if (catagory && catagory !== '') query += `&catagory=${catagory}`

                const response = await fetch(`http://localhost:5000/${url}${query || ''}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }                        

                                
                const data = await response.json();
                
                
                setData(data);
            } catch (err) {
                console.error({err}, 'err');
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, catagory, currentPage, limit, search]);

    return { data, isLoading, error };
}

