export const getReservations = async () => {
  return fetch("http://localhost:3001/api/v1/reservations").then((res) =>
    res.json()
  );
};

export const submitReservation = async (data) => {
  return fetch("http://localhost:3001/api/v1/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteReservation = async (id) => {
  fetch("http://localhost:3001/api/v1/reservations/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
