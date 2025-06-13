
 import React from 'react';
import './ThingsToKnowSection.css';

const ThingsToKnowSection = () => {
  return (
    <div className="things-to-know-section">
      <div className="things-to-know-content">
        <div className="house-rules">
          <h4>House rules</h4>
          <p><span role="img" aria-label="Check-in">🕒</span> Check-in: After 4:00 PM</p>
          <p><span role="img" aria-label="Checkout">🕒</span> Checkout: 10:00 AM</p>
          <p><span role="img" aria-label="Self check-in with lockbox">🔐</span> Self check-in with lockbox</p>
          <p><span role="img" aria-label="Not suitable for infants (under 2 years)">🚼</span> Not suitable for infants (under 2 years)</p>
          <p><span role="img" aria-label="No smoking">🚭</span> No smoking</p>
          <p><span role="img" aria-label="No pets">🐾</span> No pets</p>
          <p><span role="img" aria-label="No parties or events">🎉</span> No parties or events</p>
        </div>
        <div className="health-safety">
          <h4>Health & safety</h4>
          <p><span role="img" aria-label="Committed to Airbnb's enhanced cleaning process">✨</span> Committed to Airbnb's enhanced cleaning process. 
          <a href="https://www.airbnb.co.za/rooms/24231390/house-rules?adults=1&category_tag=Tag%3A8253&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1527220675&search_mode=flex_destinations_search&check_in=2024-08-16&check_out=2024-08-21&source_impression_id=p3_1721887653_P3YwTGB9oaYKmqbf&previous_page_section_name=1000&federated_search_id=50a1423a-b7ad-4750-a392-c1a11026d065">Show more</a></p>
          <p><span role="img" aria-label="Airbnb's social-distancing and other COVID-19-related guidelines apply">🦠</span> Airbnb's social-distancing and other COVID-19-related guidelines apply</p>
          <p><span role="img" aria-label="Carbon monoxide alarm">🚨</span> Carbon monoxide alarm</p>
          <p><span role="img" aria-label="Smoke alarm">🔥</span> Smoke alarm</p>
          <p><span role="img" aria-label="Security Deposit - if you damage the home, you may be charged up to $566">💵</span> Security Deposit - if you damage the home, you may be charged up to $566</p>
          <a href="https://www.airbnb.co.za/rooms/24231390/safety?adults=1&category_tag=Tag%3A8253&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1527220675&search_mode=flex_destinations_search&check_in=2024-08-16&check_out=2024-08-21&source_impression_id=p3_1721887653_P3YwTGB9oaYKmqbf&previous_page_section_name=1000&federated_search_id=50a1423a-b7ad-4750-a392-c1a11026d065">Show more</a>
        </div>
        <div className="cancellation-policy">
          <h4>Cancellation policy</h4>
          <p>Free cancellation before Feb 14</p>
        </div>
      </div>
    </div>
  );
}

export default ThingsToKnowSection;