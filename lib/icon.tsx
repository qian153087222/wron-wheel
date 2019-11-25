import React from 'react';
import './importIcons.js'

interface iconProps {
    name: String,
    color?: string,
    width?: string | number,
    height?: string | number
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
    return (
        <span>
            <svg width={props.width} height={props.height}>
                <use fill={props.color}  xlinkHref={`#${props.name}`} />
            </svg>
        </span>
    )
};

export default Icon;