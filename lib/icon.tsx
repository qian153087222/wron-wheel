import React from 'react';
import './importIcons.js';
import './icon.scss';
import classer from './helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    fill:string;
}

const Icon: React.FunctionComponent<IconProps> = ({ className, name,fill, ...otherProps }) => {
    
    return (
        <svg
            className={classer('wron-icon',className)}
            {...otherProps}
        >
            <use fill={fill} xlinkHref={`#${name}`} />
        </svg>
    )
};

export default Icon;