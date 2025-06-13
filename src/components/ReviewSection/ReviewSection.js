import React from 'react';
import './ReviewSection.css';
import StarIcon from '@mui/icons-material/Star';

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h3>5.0 · 7 reviews</h3>
      <div className="review-ratings">
        <div className="rating-item">
          <p>Cleanliness</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '100%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Communication</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '70%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Check-in</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '58%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Accuracy</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '99%' }}></div></div>
          <p>5.0</p>
        </div>
        <div className="rating-item">
          <p>Location</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '60%' }}></div></div>
          <p>4.9</p>
        </div>
        <div className="rating-item">
          <p>Value</p>
          <div className="rating-bar"><div className="rating-fill" style={{ width: '74%' }}></div></div>
          <p>4.7</p>
        </div>
      </div>

      <div className="reviews-container">
        <div className="reviews-left">
          <div className="review">
            <img src="https://tse4.mm.bing.net/th?id=OIP.0yi26fO0azz9oRCE5I59zgHaE8&pid=Api&P=0&h=220" alt="Reviewer 1" className="reviewer-image" />
            <div className="review-text">
              <p><strong>DenM</strong> · December 2023</p>
              <p>service massive and EXCELLENT.</p>
            </div>
          </div>
          <div className="review">
            <img src="https://tse1.explicit.bing.net/th?id=OIP.LC5QeewTlOYRlb0-6cg4vAHaNK&pid=Api&P=0&h=220" alt="Reviewer 2" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Portia</strong> · September 2023</p>
              <p>Perfect last minute option for one night close to transport connections, restaurants and old town. Good price,.</p>
              <button className="show-more-button">Show more</button>
            </div>
          </div>
          <div className="review">
            <img src="https://tse4.mm.bing.net/th?id=OIP.OYGQMo9Rp4aMkzniqdnk3AAAAA&pid=Api&P=0&h=220" alt="Reviewer 3" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Martha</strong> · February 2023</p>
              <p>The property is in a perfect location for downtown. Many places of interest can be easily reached by metro or on foot. Cristina is a very warm and kind host.</p>
            </div>
          </div>
        </div>
        <div className="reviews-right">
          <div className="review">
            <img src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg" alt="Reviewer 4" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Paul</strong> · June 2024</p>
              <p>Nice place to stay! and good location</p>
            </div>
          </div>
          <div className="review">
            <img src="https://avatarfiles.alphacoders.com/103/103875.png" alt="Reviewer 5" className="reviewer-image" />
            <div className="review-text">
              <p><strong>T.Vans</strong> · March2024</p>
              <p>An impeccable and super nice welcome, the room was beautiful, really royal with the private pool and a beautiful bathroom.</p>
            </div>
          </div>
          <div className="review">
            <img src="https://tse3.mm.bing.net/th?id=OIP.xRT4Iunhn8opElpH3uZrBAHaGo&pid=Api&P=0&h=220" alt="Reviewer 6" className="reviewer-image" />
            <div className="review-text">
              <p><strong>Virginia</strong> · March 2024</p>
              <p>Even though I checked in late, I checked in without any problems. During my stay, they responded with quick responses, attentiveness, and kindness</p>
              <button className="show-more-button">Show more</button>
            </div>
          </div>
        </div>
      </div>
      <button className="show-all-reviews-button">Show all 348 reviews</button>
    </div>
  );
};

export default ReviewSection;