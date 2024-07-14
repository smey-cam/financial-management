import React from 'react'
import { Modal, Form } from 'react-bootstrap'
import { Translation } from 'react-i18next';
import RoundButton, { RoundButtonCancel } from '../buttons/RoundButton';

class MessageConfirmModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            message: "",
            type: "danger",
            handleOnHide: null,
            title: null,
            isCancel: false,
            isConfirm: false
        }
    }

    show(message, title) {
        this.setState({
            visible: true,
            message,
            handleOnHide: null,
            isConfirm: false,
            title
        })
    }

    showError(message, title) {
        this.setState({
            visible: true,
            message,
            type: "danger",
            handleOnHide: null,
            isConfirm: false,
            title
        })
    }

    showSuccess(message, onHide, title) {
        this.setState({
            visible: true,
            message,
            type: "success",
            handleOnHide: onHide,
            isConfirm: false,
            title
        })
    }

    showWarning(message, onHide, title) {
        this.setState({
            visible: true,
            message,
            type: "warning",
            handleOnHide: onHide,
            isConfirm: false,
            title
        })
    }


    showWarningConfirm(message, onHide, title) {
        this.setState({
            visible: true,
            message,
            type: "warning",
            handleOnHide: onHide,
            isCancel: true,
            title,
            isConfirm: true
        })
    }

    render() {
        const { message, visible, type, handleOnHide, title, isCancel, isConfirm } = this.state;
        const { textCentered } = this.props;

        let icon = '' // require('../../assets/images/Warning.png');
        if (type === 'success') {
            icon = '' // require('../../assets/images/Success.png');
        } else if (type === 'warning') {
            icon = '' // require('../../assets/images/Warning.png');
        }

        return (
            <Modal
                show={visible}
                onHide={() => {
                    this.setState({ visible: false })
                    if (handleOnHide) {
                        handleOnHide()
                    }
                }}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdropClassName="loading-modal-backdrop"
                className="loading-modal"
            >
                <Translation>
                    {t => (
                        <div style={{
                            backgroundColor: "white",
                            borderTop: "5px solid red",
                            padding: "5px 5px 0px 5px",
                            borderRadius: '4px'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} className="mr-3 ml-3 mb-1 mt-3">
                                <Form.Text className="text-header- primary_title">
                                    {t(title)}
                                </Form.Text>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end'
                            }}>
                            </div>
                            <div className="mr-4 ml-4 mb-1" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <Form.Text style={{ fontSize: '24px', fontWeight: 700, color:'#000000' }} className={`text-center primary_title text-${type}-`}>
                                {
                                    type === 'danger' ? 'Oops!' : type + '!'
                                }
                            </Form.Text>
                            {/* <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '1.3', textAlign: textCentered ? "center" : "inherit", marginTop: '18px' }}>{(typeof message) === 'string' ? message : message}</p> */}
                            <Form.Text className='pt-2 pb-1' style={{ fontWeight: '400', fontSize: '16px', color:'#000000', lineHeight: '1.3', textAlign: textCentered ? "center" : "inherit", marginTop: '18px' }}>{(typeof message) === 'string' ? t(message) : message}</Form.Text>
                            </div>
                            { isConfirm ? <div className="pb-4 text-center">
                                <RoundButton
                                    width={`168px`}
                                    onClick={() => {
                                        this.setState({ visible: false })
                                        if (handleOnHide) {
                                            handleOnHide()
                                        }
                                    }}
                                    title={t('Ok')}
                                />
                                {
                                    isCancel ? <RoundButtonCancel
                                        width={`168px`}
                                        marginLeft={`30px`}
                                        className="ml-2"
                                        onClick={() => {
                                            this.setState({ visible: false })
                                        }}
                                        title={t('Cancel')} /> : null
                                }
                            </div> : null }
                            {
                                !isConfirm ? <div className="pb-4 text-center">
                                    <RoundButton
                                        onClick={() => {
                                            this.setState({ visible: false })
                                            if (handleOnHide) {
                                                handleOnHide()
                                            }
                                        }}
                                        width={`168px`}
                                        title={t('Close')}
                                    />
                                </div> : null
                            }
                        </div>
                    )}
                </Translation>
            </Modal>
        )
    }
}

export default MessageConfirmModal;