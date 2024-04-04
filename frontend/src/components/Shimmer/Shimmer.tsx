// Shimmer.js
import * as React from 'react';
import './Shimmer.css';

const Shimmer = ({width = '100%', height = '100%', borderRadius = '0'}) => {
    const shimmerStyle = {
        width,
        height,
        borderRadius,
    };

    return (
        <div className="shimmer-wrapper" style={{width, height}}>
            <div className="shimmer" style={shimmerStyle}></div>
        </div>
    );
};

export default Shimmer;
