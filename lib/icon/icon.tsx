import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    fill: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ className, name, fill, ...restProps }) => {
    
    return (
        <svg className={classes('wron-icon',className)}
            {...restProps}
        >
            <use fill={fill} xlinkHref={`#${name}`} />
        </svg>
    )
};

export default Icon;