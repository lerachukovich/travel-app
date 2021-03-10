import React from 'react';

const Toast = ({isShow}) => {
    return (
        <div className={`toast ${isShow ? "show" : ""}`} role="alert" aria-live="assertive" aria-atomic="true" style={{position: 'absolute', top: '50%', right: '10%'}}>
            <div class="toast-header">
                <strong className="mr-auto">Attention!</strong>
            </div>
            <div className="toast-body">
                Invalid data
            </div>
        </div>
    )
}

export default Toast;
