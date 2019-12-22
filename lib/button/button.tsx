//有时候import不能正确引入，导致cannot read property createElement of undefined错误，就要自己重命名
import *as React from 'react';
import {scopedClassMaker} from '../classes';
import './button.scss';
import classes from '../helper/classes'

interface ButtonProps extends React.ButtonHTMLAttributes<Element> {
    name?: string;
    Type?:string;
    className?:string;
};

const scopedClass = scopedClassMaker('wron-button');
const sc = scopedClass;

const Button: React.FunctionComponent<ButtonProps> = ({ className, Type,name, ...restProps }) => {

    return (
        <button className={classes(`${sc()} ${sc(Type)}`, className) } {...restProps}>{name}</button>
    )
};

Button.defaultProps = {
    Type:'Default',
    name:'Default'
}

export default Button;







