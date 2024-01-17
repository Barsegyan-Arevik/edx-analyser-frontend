// @flow

import React, {useEffect, useState} from 'react';
import './MetricExtractor.css';

type MetricExtractorProps = {};

export default function MetricExtractor(props: MetricExtractorProps) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://127.0.0.1:8000/metrics/video_fetch')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setData(null);
            });
    };

    return (
        <div className="metric-extractor-container"> {}
            <h2>Video Viewing Times:</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
}