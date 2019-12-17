import React, { FunctionComponent, Fragment } from 'react';
import Button from '../button/button';
import Icon from '../icon/icon';
import {scopedClassMaker} from '../classes';
import './dialog.scss';

interface Props {
    visible: boolean;
}

const scopedClass = scopedClassMaker('wron-dialog');
const sc = scopedClass;

const Dialog: FunctionComponent<Props> = ({ visible, children, ...restProps }) => {
    return (
        visible ?
            <Fragment>
                <div className={sc('mask')}></div>
                <div className={sc()}>
                    <div className={sc('close')}>
                        <Icon name='close'/>
                    </div>
                    <header className={sc('header')}>
                        提示
                    </header>
                    <main className={sc('main')}>{children}</main>
                    <footer className={sc('footer')}>
                        <Button Type='Primary' name='ok' />
                        <Button Type='Default' name='cancel' />
                    </footer>
                </div>
            </Fragment>
            : null
    )
}

export default Dialog