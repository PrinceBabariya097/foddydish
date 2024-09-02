import { useEffect, useState } from "react";

export default function useDebouncing (query, delay) {
    const [debouncedValue, setDebouncedValue] = useState(query)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(query)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
        
    },[query, delay])

    return debouncedValue
}