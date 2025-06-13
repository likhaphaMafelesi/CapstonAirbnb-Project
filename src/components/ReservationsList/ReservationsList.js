import React from 'react';
import './ReservationsList.css';

const ReservationsList = () => {
  const reservations = [
    {
      bookedBy: "Thabo Ndaba",
      property: "Property 1",
      checkin: "13/06/2025",
      checkout: "15/06/2025"
    },
    {
      bookedBy: "LeratoM",
      property: "Property 2",
      checkin: "25/06/2025",
      checkout: "27/06/2025"
    },
    {
      bookedBy: "Musa Ndeve",
      property: "Property 3",
      checkin: "05/07/2025",
      checkout: "09/07/2025"
    }
  ];

  return (
    <div className="reservations-list">
      <h2>My Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Booked by</th>
            <th>Property</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.bookedBy}</td>
              <td>{reservation.property}</td>
              <td>{reservation.checkin}</td>
              <td>{reservation.checkout}</td>
              <td>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;