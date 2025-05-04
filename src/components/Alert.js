import React from 'react'

function Alert(props) {
    return (
        props.message &&
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Alert!</strong> {props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Alert;
