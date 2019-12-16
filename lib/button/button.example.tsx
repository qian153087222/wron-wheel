import React from 'react'
import Button from './button';

const ButtonExamople: React.FunctionComponent = () => {
    return (
    <div>
        <Button Type='Primary' name={'Primary'} />
        <Button Type='Default' name={'Default'} />
        <Button Type='Dashed' name={'Dashed'} />
        <Button Type='Danger' name={'Danger'} />
    </div>)

}

export default ButtonExamople;
