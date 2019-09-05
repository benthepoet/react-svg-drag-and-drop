import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

const settings = {
    width: 640,
    height: 480
};

ReactDOM.render(<App {...settings} />, document.getElementById('root'));
