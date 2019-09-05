import React, { useReducer } from 'react';

import Nav from './Nav';

const DRAG_START = 'DRAG_START';
const DRAG_MOVE = 'DRAG_MOVE';
const DRAG_END = 'DRAG_END';

const reducer = (state, action) => {
    switch (action.type) {
        case DRAG_START:
            return {
                ...state,
                drag: {
                    ...action.payload
                }
            };
        case DRAG_MOVE:
            return {
                ...state,
                circle: {
                    ...state.circle,
                    cx: state.circle.cx + action.payload.clientX - state.drag.clientX,
                    cy: state.circle.cy + action.payload.clientY - state.drag.clientY
                },
                drag: {
                    ...action.payload
                }
            }
        case DRAG_END:
            return {
                ...state,
                drag: null
            };
        default:
            return state;
    }
};

export default function App({ width, height }) {
    const initialState = { 
        circle: {
            cx: width / 2, 
            cy: height / 2, 
            r: width / 10
        },
        drag: null
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <Nav />
            <div className="flex pt-4">
                <div></div>
                <div className="text-center">
                    <svg 
                        className="bg-white shadow-light" 
                        width={width} 
                        height={height}
                        onMouseDown={({ clientX, clientY }) => dispatch({ type: DRAG_START, payload: { clientX, clientY } })}
                        onMouseMove={({ clientX, clientY }) => state.drag && dispatch({ type: DRAG_MOVE, payload: { clientX, clientY } })}
                        onMouseUp={() => dispatch({ type: DRAG_END })}>
                        <circle stroke="green" strokeWidth="4" fill="yellow" {...state.circle}></circle>
                    </svg>
                </div>
                <div></div>
            </div>
        </div>
    );
};