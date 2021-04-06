import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import Bookings from '../Bookings/Bookings';


const Book = () => {
  const { bedType } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date()
  });
  const handleCheckingDate = (date) => {
    const newDates = { ...selectedDate }
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };

  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate }
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };

  const handleBooking = () =>{
    const newBooking = {...loggedInUser, ...selectedDate};
    fetch('http://localhost:5000/addBooking', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newBooking)
    })
       .then(res => res.json())
       .then(data =>{
         console.log(data);
       })
  }
  return (

    <div style={{ textAlign: 'center' }}>
      <h1>Hello, {loggedInUser.name} Let's book a {bedType} Room.</h1>
      <h1>Name:{bedType}</h1>
 

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
        <Button onClick={handleBooking} variant="contained" color="primary">Add Now</Button>
      </MuiPickersUtilsProvider>


      <Bookings/>
    </div>
  );
};

export default Book;