//有时候import不能正确引入，导致cannot read property createElement of undefined错误，就要自己重命名
import *as React from 'react';
import './button.scss';
import classes from '../helper/classes'

interface ButtonProps extends React.ButtonHTMLAttributes<Element> {
    name: string;
    Type:string;
    className?:string
}

const Button: React.FunctionComponent<ButtonProps> = ({ className, Type,name, ...restProps }) => {

    return (
        <button className={classes(`wron-button wron-${Type}`, className) } {...restProps}>{name}</button>
    )
};

export default Button;







