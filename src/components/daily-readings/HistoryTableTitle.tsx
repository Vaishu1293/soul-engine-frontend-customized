import React from 'react';

const HistoryTableTitle = () => {
    return (
        <div className="history-list-row-heading">
            <div className="history-list-row">
                <div className="history-list-cell history-list-cell-sl">#</div>
                <div className="history-list-cell history-list-cell-owner">Date</div>
                <div className="history-list-cell history-list-cell-owner">Spread</div>
                <div className="history-list-cell history-list-cell-owner">Type</div>
                <div className="history-list-cell history-list-cell-owner">Summary</div>
            </div>
        </div>
    );
};

export default HistoryTableTitle;