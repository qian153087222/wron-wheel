//有时候import不能正确引入，导致cannot read property createElement of undefined错误，就要自己重命名
import *as React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ className, fill, name, ...restProps }) => {

    return (
        <svg className={classes('wron-icon', className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    )
};

export default Icon;