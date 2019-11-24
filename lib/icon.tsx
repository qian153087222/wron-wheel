import React from 'react';
import wechat from '../icons/wechat.svg'

console.log(wechat)

interface iconProps {
    name:String
}

const Icon:React.FunctionComponent<iconProps> =  (props)=> {
    return (
    <span>{props.name}</span>
    )
};

export default Icon;