import React from 'react';

import Nav from './Nav';

export default ({ width, height }) => (
    <div>
        <Nav />
        <div className="flex pt-4">
            <div></div>
            <div className="bg-white shadow-light">
                <svg width={width} height={height}></svg>
            </div>
            <div></div>
        </div>
    </div>
);