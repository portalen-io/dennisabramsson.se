import React from 'react';

export const Spinner = (): JSX.Element => {
    return (
        <div className="Spinner">
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};