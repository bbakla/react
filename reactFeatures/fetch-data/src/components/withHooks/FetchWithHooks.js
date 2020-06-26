/*
* Resource: https://www.robinwieruch.de/react-hooks-fetch-data
* */
import React, {useEffect, useState, Fragment} from "react";
import axios from 'axios';

export default function FetchWithHooks() {

    const [query, setQuery] = useState('redux');
    const [{data, isLoading, isError}, doFetch] = useDataFetchCustomHook("http://hn.algolia.com/api/v1/search?query=redux", {hits: [],});

    /*
     This generates an error on the dev console because async() function returns and Promise. However,
     it should return either nothing or a clean up function
     */
    /*useEffect(async () => {
        const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
        setData(result.data);
        }, []
    );*/


    //This is exactly the same with the useEffect in  the custom hook in terms of functionality
    /*useEffect(() => {
        async function fetchData() {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
            setData(result.data);
        }

        fetchData();
    }, []);*/

    return (
        <Fragment>
            <form onSubmit={event => {
                doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
                event.preventDefault();
            }}>
                <input
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {isError && <div>Something went wrong</div>}

            {isLoading ? (
                <div>
                    <h1>Loading</h1>
                </div>) : (
                <ul>
                    {
                        data.hits.map(item => (
                            <li key={item.objectID}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                </ul>
            )}

        </Fragment>
    );
}

const useDataFetchCustomHook = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const result = await axios(url);
                setData(result.data);
            } catch (e) {
                setError(true);
            }

            setLoading(false);
        };

        fetchData();
    }, [url]);

    return [{data, isLoading, isError}, setUrl]
}
