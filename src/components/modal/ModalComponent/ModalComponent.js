import { CButton, CCard, CCardBody, CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react-pro"
import { forwardRef, useState } from "react"

const ModalComponent = (props) => {
    const {content, fullscreen, 
        isOpen, setIsOpen , title
    } = props;
    

    return (
        <>
            <CModal
                fullscreen={fullscreen ? fullscreen : true}
                visible={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <CModalHeader>
                    {title && <CModalTitle id="FullscreenExample1">{title ? title : ''}</CModalTitle>}
                </CModalHeader>
                <CModalBody>
                    {content}
                </CModalBody>
            </CModal>
        </>
    )
}

export default ModalComponent;