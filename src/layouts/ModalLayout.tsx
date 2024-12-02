import React, { ReactElement } from 'react';
import ButtonField from '../components/ButtonField';

type Props = {
    width?: string;
    children?: ReactElement;
    title?: string;
    isShow?: boolean;
    onClose?: ()=>void;
    onComfirm?: ()=>void;
}

function ModalLayout({
    width,
    children,
    title,
    isShow,
    onClose,
    onComfirm
}:Props) {
    return (
        <>
            {
                isShow && 
                (
                    <div className='wrapper-modal'>
                        <div className='modal-body' style={{width}}>
                            {
                                !children ? (
                                    <div style={{display:'flex', flexDirection:'column', rowGap:'1rem'}}>
                                        <div style={{fontSize:'22px', textAlign:'center'}}>
                                            {title}
                                        </div>
                                        <div style={{display:'flex', columnGap:'1rem', justifyContent:'center'}}>
                                            <ButtonField onClick={onComfirm}>Comfirm</ButtonField>
                                            <ButtonField onClick={onClose} color='primary'>Cancel</ButtonField>
                                        </div>
                                    </div>
                                )
                                :children
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ModalLayout;