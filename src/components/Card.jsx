import React from 'react';
import './Card.css';

export function Card({ children, className = '', hover = true, style = {} }) {
    return (
        <div className={`card ${hover ? 'card-hover' : ''} ${className}`} style={style}>
            {children}
        </div>
    );
}
