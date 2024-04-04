import * as React from 'react';
import Shimmer from './Shimmer';

const MyShimmer = () => {
  return (
    <div>
      <h1>
        <Shimmer width="200px" height="20px" borderRadius="10px" />
      </h1>
      <p>
        <Shimmer />
      </p>
      {/* Add more shimmering elements as needed */}
    </div>
  );
};

export default MyShimmer;
