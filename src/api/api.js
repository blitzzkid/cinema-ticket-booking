import axios from "./axios";

export const createNewBooking = async input => {
  const response = await axios.post("/bookings/new", input, {
    withCredentials: true
  });
  return response.data;
};
