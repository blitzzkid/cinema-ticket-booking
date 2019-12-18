import axios from "./axios";

export const createNewBooking = async input => {
  const response = await axios.post("/bookings/new", input, {
    withCredentials: true
  });
  return response.data;
};

export const fetchAllSeats = async () => {
  const response = await axios.get("/seats", { withCredentials: true });
  return response.data;
};
