import React from "react";
import "./TableManager.scss";

// eslint-disable-next-line react/prop-types
<<<<<<< HEAD
const Table = ({ togglePage, pages, shipmentData }) => {
=======
const Table = ({ togglePage, pages, shipmentData, activeButton }) => {
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3

  const handleClick = (status) => {
    // Do something when the status is clicked
    console.log("Status clicked:", status);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "green";
      case "Cancelled":
        return "red";
      case "Shipping":
        return "blue";
      case "Waiting Pickup":
        return "yellow";
      default:
        return "black"; // default color
    }
  };

  return (
    <div className="table-container-manager">
      <table className="table-manager">
        <tbody>
<<<<<<< HEAD
          {shipmentData.map((shipment, index) => (
=======
          {shipmentData
          .filter((shipment) =>
            (activeButton === 'inProgress' && (shipment.status === 'Shipping' || shipment.status === 'Waiting Pickup')) ||
            (activeButton === 'cancelled' && shipment.status === 'Cancelled') ||
            (activeButton === 'completed' && shipment.status === 'Delivered') ||
            (activeButton === 'viewAll' && shipment)
          )
          .map((shipment, index) => (
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
            <tr className="tr-manager" key={index}>
              <td className="td-manager" onClick={() => togglePage(2,0)}>
                <a href="#" className="clickable-manager">{shipment.batchId}</a>
              </td>
              <td className="td-manager">
                <a href="#" className="clickable-manager">{shipment.shippingId}</a>
              </td>
              <td className="td-manager">{shipment.trackingLocation}</td>
              <td className="td-manager">{shipment.shippingAddress}</td>
              <td className="td-manager">
                <a
                  href="#"
                  className={`clickable2-manager ${getStatusColor(shipment.status)}`}
                  onClick={() => handleClick(shipment.status)}
                >
                  {shipment.status}
                </a>
              </td>
              <td className="td-manager">{shipment.estimatedArrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Table;