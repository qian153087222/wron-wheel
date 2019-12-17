import React, { useState } from 'react'
import Dialog from './dialog';

const DialogExamople = () => {
    const [x, setX] = useState(false);
   
    return (
        <div>
            <button onClick={() => setX(!x)}>Click</button>
            <Dialog visible={x} >
                <strong>hi</strong>
            </Dialog>
        </div>)

}

export default DialogExamople;
