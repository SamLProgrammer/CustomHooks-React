import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setData((d) => ({...d, isLoading: true}));

        const response = await fetch(url);
        const data = await response.json();
        setData((d) => ({...d, data, isLoading: false}));
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
  return {
    isLoading: data.isLoading,
    data: data.data,
    hasError: data.hasError,
  };
}
