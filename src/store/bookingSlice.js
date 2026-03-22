import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'outstation',   
  tripType: 'roundtrip',    
  from: '',
  to: '',
  trip: '',                  
  pickupDate: '',
  returnDate: '',
  pickupTime: '',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
      if (action.payload === 'local' || action.payload === 'airport') {
        state.tripType = 'oneway';
      }
    },
    setTripType(state, action) {
      state.tripType = action.payload;
    },
    setFrom(state, action)        { state.from = action.payload; },
    setTo(state, action)          { state.to = action.payload; },
    setTrip(state, action)        { state.trip = action.payload; },
    setPickupDate(state, action)  { state.pickupDate = action.payload; },
    setReturnDate(state, action)  { state.returnDate = action.payload; },
    setPickupTime(state, action)  { state.pickupTime = action.payload; },
    resetBooking()                { return initialState; },
  },
});

export const {
  setActiveTab, setTripType,
  setFrom, setTo, setTrip,
  setPickupDate, setReturnDate, setPickupTime,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;