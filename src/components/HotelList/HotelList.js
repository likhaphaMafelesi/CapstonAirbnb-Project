import React from 'react';
import './HotelList.css';
import StarIcon from '@mui/icons-material/Star';

const HotelList = () => {
  const hotels = [
    {
      name: "Rosebank Hotel",
      image: "https://a0.muscache.com/im/pictures/monet/Luxury-24231390/original/f83cc5f5-670d-47b6-95a6-eea00f73c7d6?im_w=720",
      description: "4 Room Bedroom",
      details: "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 6.0,
      reviews: 341,
      price: 124
    },
    {
      name: "Johannesburg Hotel",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-34811862/original/ce4b25b8-6a9e-4112-97bd-895df546e5ae.jpeg?im_w=720",
      description: "Entire home in Villa",
      details: "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 458,
      price: 89
    },
    {
      name: "Sandton City Center Home",
      image: "https://a0.muscache.com/im/pictures/860a74bf-18c6-47f7-a702-68a34d5cf51e.jpg?im_w=720",
      description: "2 BedRooms",
      details: "2- 4 guests · Entire apartment · 2 beds · 2 bath · Wifi · Kitchen · Free Parking",
      rating: 4.0,
      reviews: 286,
      price: 69
    }
  ];

  return (
    <div className="hotel-list">
      <h2>My Hotel List</h2>
      {hotels.map((hotel, index) => (
        <div className="hotel-card" key={index}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3>{hotel.description}</h3>
            <h2>{hotel.name}</h2>
            <p>{hotel.details}</p>
            <div className="hotel-rating">
              <StarIcon className="star-icon" /> {hotel.rating} ({hotel.reviews} reviews)
            </div>
            <div className="hotel-price">${hotel.price} /night</div>
          </div>
          <div className="hotel-actions">
            <button className="update-button">Update</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;