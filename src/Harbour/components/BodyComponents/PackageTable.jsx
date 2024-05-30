import React from 'react';
import "../../css/PackageTable.css"

const PackageTable = ({ order }) => {
    return (
        <div className="table-card">
          <div className="table-header">
            <span>Order:</span> <span>{order.id}</span>
          </div>
          <div className="table-details">
            <div className="detail-item">
              <div>Batch ID :</div>
              <div>{order.batchId}</div>
            </div>
            <div className="detail-item">
              <div>Weight :</div>
              <div>{order.weight}</div>
            </div>
            <div className="detail-item">
              <div>Centra ID :</div>
              <div>{order.centraId}</div>
            </div>
            <div className="detail-item">
              <div>Date :</div>
              <div>{order.date}</div>
            </div>
          </div>
        </div>
      );
};

export default PackageTable;