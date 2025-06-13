import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [filters, setFilters] = useState({
    location: '',
    checkInDate: '',
    checkOutDate: '',
    guests: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));

    if (name === 'location') {
      navigate(value);
    }
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching with filters:', filters);
  };

//   const Search = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const selectionRange = {
//     StartDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   const handleSelect = (ranges) => {
//     setStartDate(ranges.selection.startDate);
//     setEndDate(ranges.selection.endDate);
//   }
// }

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Select Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="/" disabled>Select Location</option>
            <option value="/admin/02">All location</option>
            <option value="/admin/02">Gauteng</option>
            <option value="/admin/02">CapeTown</option>
          </select>
        </div>
        <div className="search-section">
          {/* <CalendarSection DateRangePicker ranges={selectionRange} onChange={handleSelect}/> */}
          <label>Check in</label>
          <input
            type="date"
            name="checkInDate"
            value={filters.checkInDate}
            onChange={handleChange}
            placeholder="Add dates"
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="date"
            name="checkOutDate"
            value={filters.checkOutDate}
            onChange={handleChange}
            placeholder='Add dates'
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <input
            type="number"
            min="1"
            max="10"
            name="guests"
            value={filters.guests}
            onChange={handleChange}
            placeholder="Add guests"
          />
        </div>
        <button className='search-button' onClick={handleSearch}>
          <Link to="/ListingPage">
                    <p><SearchIcon /></p>
          </Link>
          
        </button>
      </div>
    </div>
  );
};

export default NavBar;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './NavBar.css';
// import SearchIcon from "@mui/icons-material/Search";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const NavBar = () => {
//   const [filters, setFilters] = useState({
//     location: '',
//     checkInDate: null,
//     checkOutDate: null,
//     guests: 1
//   });

//   const navigate = useNavigate();

//   const handleDateChange = (date, name) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: date
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value
//     }));

//     if (name === 'location') {
//       navigate(value);
//     }
//   };

//   const handleSearch = () => {
//     console.log('Searching with filters:', filters);
//   };

//   return (
//     <div className="search-bar-container">
//       <div className="search-bar">
//         {/* Location */}
//         <div className="search-section">
//           <label>Select Location</label>
//           <select
//             name="location"
//             value={filters.location}
//             onChange={handleChange}
//           >
//             <option value="/" disabled>Select Location</option>
//             <option value="/admin/02">All location</option>
//             <option value="/admin/02">Botswana</option>
//             <option value="/admin/02">CapeTown</option>
//           </select>
//         </div>

//         {/* Check-in Date */}
//         <div className="search-section">
//           <label>Check-in</label>
//           <DatePicker
//             selected={filters.checkInDate}
//             onChange={(date) => handleDateChange(date, 'checkInDate')}
//             selectsStart
//             startDate={filters.checkInDate}
//             endDate={filters.checkOutDate}
//             placeholderText="Select date"
//           />
//         </div>

//         {/* Check-out Date */}
//         <div className="search-section">
//           <label>Check-out</label>
//           <DatePicker
//             selected={filters.checkOutDate}
//             onChange={(date) => handleDateChange(date, 'checkOutDate')}
//             selectsEnd
//             startDate={filters.checkInDate}
//             endDate={filters.checkOutDate}
//             minDate={filters.checkInDate}
//             placeholderText="Select date"
//           />
//         </div>

//         {/* Guest Count */}
//         <div className="search-section">
//           <label>Guests</label>
//           <input
//             type="number"
//             name="guests"
//             value={filters.guests}
//             min="1"
//             onChange={handleChange}
//             placeholder="Number of guests"
//           />
//         </div>

//         {/* Search Button */}
//         <button className="search-button" onClick={handleSearch}>
//           <SearchIcon />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
