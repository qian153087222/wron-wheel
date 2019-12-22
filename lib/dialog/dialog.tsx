import React, { FunctionComponent, Fragment, ReactElement, ReactNode, ReactFragment } from 'react';
import Icon from '../icon/icon';
import { scopedClassMaker } from '../classes';
import './dialog.scss';
import ReactDOM from 'react-dom';
import Button from '../button/button';

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClisckMask?: boolean;
    enablekMask?: boolean;
}

const scopedClass = scopedClassMaker('wron-dialog');
const sc = scopedClass;



const Dialog: FunctionComponent<Props> = ({ visible, children, buttons,enablekMask, ...restProps }) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        restProps.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        restProps.closeOnClisckMask && restProps.onClose(e)
    }
    const dialog = visible ?
        <Fragment>
            {enablekMask&&<div className={sc('mask')} onClick={onClickMask}></div>}
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name='close' />
                </div>
                <header className={sc('header')}>
                    提示
        </header>
                <main className={sc('main')}>{children}</main>
                {buttons && buttons.length > 0 &&
                    <footer className={sc('footer')}>
                        {buttons && buttons.map((item, index) => React.cloneElement(item, { key: index }))}
                    </footer>
                }
            </div>
        </Fragment>
        : null
    return ReactDOM.createPortal(
        dialog,
        document.body
    )
}

Dialog.defaultProps = {
    closeOnClisckMask: false,
    enablekMask:true
}

const modal = (content: ReactNode | ReactFragment, buttons?: Array<ReactElement>) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component = <Dialog visible={true} onClose={onClose} buttons={buttons}> {content}</Dialog >;
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    return onClose;
}

const alert = (content: string, success?: () => void) => {
    const button = <Button onClick={() => colse()} Type='Primary' name='ok' />
    const colse = modal(content, [button])
}

const confirm = (content: string, success?: () => void, fail?: () => void) => {

    const onSuccess = () => {
        onClose();
        success && success();
    }
    const onFail = () => {
        onClose();
        fail && fail();
    }
    const thisButton = [
        <Button onClick={onSuccess} Type='Primary' name='ok' />,
        <Button onClick={onFail} Type='Default' name='cancel' />];
    const onClose = modal(content, thisButton);
}


export { alert, confirm, modal };

export default Dialog