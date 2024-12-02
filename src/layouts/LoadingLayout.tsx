import React, { ReactElement } from 'react';
import SpinnerLoad from '../components/SpinnerLoad';

type Props = {
    isLoading?: boolean;
    children?: ReactElement;
}

function LoadingLayout({
    isLoading,
    children
}:Props) {
    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            {
                isLoading && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <SpinnerLoad />
                    </div>
                )
            }
            {
                !isLoading && (
                    children
                )
            }
        </div>
    );
}

export default LoadingLayout;