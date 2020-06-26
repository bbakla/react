
// Resource: https://www.robinwieruch.de/react-hooks-fetch-data

import React, {useEffect, useState, Fragment, useReducer} from "react";
import axios from 'axios';

export default function FetchWithHooksAndUseReducer() {
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        'http://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] },
    );




    return (
        <Fragment>
            <form onSubmit={event => {
                doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`, []);
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
const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_INIT":
            return {...state, isLoading: true, isError: false};
        case "FETCH_SUCCESS":
            return {...state, isLoading: false, isError: false, data: action.payload};
        case "FETCH_FAILURE":
            return {...state, isLoading: false, isError: true};
        default:
            throw new Error();

    }
};

const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    }, undefined);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: "FETCH_INIT"});

            try {
                const result = await axios(url);

                dispatch({type: "FETCH_SUCCESS", payload: result.data});
            } catch (e) {
                dispatch({type: "FETCH_FAILURE"});

            }
        };

        fetchData();

    }, [url]);

    return [state, setUrl];
}


