import React, { useState } from 'react'
import Dialog, { alert, confirm,modal } from './dialog';
import Button from '../button/button';
const success = () => {
    console.log('sucsss')
}

const fail = () => {
    console.log('fail')
}

const openModal = () => {
    const close = modal(
        <h1>你好
            <Button onClick={() => close()} Type='Primary' name='modal' />
        </h1>
    )
}
const DialogExamople = () => {
    const [x, setX] = useState(false);

    return (
        <div>
            <div>
                <Button onClick={() => setX(!x)} Type='Primary' name='Click' />
                <Dialog visible={x} buttons={
                    [
                        <Button onClick={() => setX(false)} Type='Primary' name='ok' />,
                        <Button onClick={() => setX(false)} Type='Default' name='cancel' />]
                }
                    onClose={() => setX(false)}
                    closeOnClisckMask
                >
                    <strong>hi</strong>
                </Dialog>
            </div>
            <div>
                <h1>alert</h1>
                <Button onClick={() => alert('1')} Type='Primary' name='alert' />
                <h1>confirm</h1>
                <Button onClick={() => confirm('1', success, fail)} Type='Primary' name='confirm' />
                <h1>modal</h1>
                <Button onClick={() => openModal()} Type='Primary' name='modal' />
            </div>
        </div>)

}

export default DialogExamople;
