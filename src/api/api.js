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

export const reserveSeat = async seatId => {
  const requestBody = {
    status: "reserved"
  };
  const response = await axios.patch(`/seats/${seatId}`, requestBody, {
    withCredentials: true
  });
  return response.data;
};

export const releaseSeat = async seatId => {
  const requestBody = {
    status: "available"
  };
  const response = await axios.patch(`/seats/${seatId}`, requestBody, {
    withCredentials: true
  });
  return response.data;
};

export const purchaseSeat = async seatId => {
  const requestBody = {
    status: "sold"
  };
  const response = await axios.patch(`/seats/${seatId}`, requestBody, {
    withCredentials: true
  });
  return response.data;
};
